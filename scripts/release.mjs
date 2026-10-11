// Release helper: see what's scheduled, flip a post live on its release day.
//   npm run queue              -> list drafts by pubDate, with cover + pin paths
//   npm run release <slug>     -> set draft: false and print the Pinterest assets
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

// Reveal a file in Finder (selected) so it's ready to drag into Pinterest.
function reveal(absPath) {
  if (process.platform !== 'darwin' || !existsSync(absPath)) return;
  spawnSync('open', ['-R', absPath], { stdio: 'ignore' });
}

const POSTS_DIR = 'src/content/posts';
const PINS_DIR = 'public/images/posts/pins';

function parsePost(file) {
  const raw = readFileSync(join(POSTS_DIR, file), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  const pick = (key) => fm.match(new RegExp(`^${key}:\\s*"?(.+?)"?\\s*$`, 'm'))?.[1];
  return {
    file,
    slug: file.replace(/\.md$/, ''),
    title: pick('title') ?? file,
    pubDate: pick('pubDate') ?? '?',
    draft: /^draft:\s*true\s*$/m.test(fm),
    cover: pick('cover'),
    raw,
  };
}

function assetLines(post) {
  const pin = join(PINS_DIR, `${post.slug}-pin.jpg`);
  const coverExists = post.cover && existsSync(join('public', post.cover));
  const pinExists = existsSync(pin);
  return [
    coverExists ? `  cover: ${post.cover}` : `  cover: ${post.cover ?? '(none in frontmatter)'} ${post.cover ? '[MISSING FILE]' : ''}`,
    pinExists ? `  pin:   /images/posts/pins/${post.slug}-pin.jpg` : `  pin:   [MISSING] public/images/posts/pins/${post.slug}-pin.jpg`,
  ];
}

const [maybeMode, maybeSlug] = process.argv.slice(2);
const pinMode = maybeMode === 'pin';
const slug = pinMode ? maybeSlug : maybeMode;

if (pinMode && !slug) {
  console.error('Usage: npm run pin -- <slug>');
  process.exit(1);
}

if (!slug) {
  const drafts = readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(parsePost)
    .filter((p) => p.draft)
    .sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));
  if (!drafts.length) {
    console.log('No drafts scheduled. Everything is live.');
  } else {
    console.log(`Scheduled drafts (${drafts.length}), oldest first:\n`);
    for (const p of drafts) {
      console.log(`${p.pubDate}  ${p.slug}`);
      console.log(`  "${p.title}"`);
      console.log(assetLines(p).join('\n'));
      console.log(`  flip: npm run release ${p.slug}\n`);
    }
  }
} else {
  const file = `${slug}.md`;
  const path = join(POSTS_DIR, file);
  if (!existsSync(path)) {
    console.error(`No such post: ${file}`);
    process.exit(1);
  }
  const post = parsePost(file);
  if (pinMode) {
    console.log(assetLines(post).join('\n'));
    if (post.cover) reveal(join('public', post.cover));
    reveal(join(PINS_DIR, `${post.slug}-pin.jpg`));
  } else if (!post.draft) {
    console.log(`${slug} is already live.`);
    console.log('Pinterest assets for today\'s pin:');
    console.log(assetLines(post).join('\n'));
    if (post.cover) reveal(join('public', post.cover));
    reveal(join(PINS_DIR, `${post.slug}-pin.jpg`));
  } else {
    writeFileSync(path, post.raw.replace(/^draft: true$/m, 'draft: false'));
    console.log(`${slug} is live (draft: false). Deploy with your usual build.`);
    console.log('Pinterest assets for today\'s pin:');
    console.log(assetLines(post).join('\n'));
    if (post.cover) reveal(join('public', post.cover));
    reveal(join(PINS_DIR, `${post.slug}-pin.jpg`));
  }
}
