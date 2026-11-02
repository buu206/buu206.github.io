'use strict';

const content = {
  knowledge: {
    category: 'PRODUCT EXPLORATION / 001',
    label: '概念项目 · AI 产品 / 知识管理',
    title: '拾光 · AI 知识工作台',
    description: '让收藏的知识，成为下一次思考的起点。',
    body: '<div class="detail-notice"><strong>概念展示</strong><br>这是用于展示网站布局的产品构想，不代表田羽峰的真实项目或工作成果。</div><h3>从什么问题出发？</h3><p>收藏的文章越来越多，却很难在需要时找到它们。比起继续增加收藏入口，值得探索的是：如何让已有的材料参与下一次思考？</p><h3>一个可能的产品方向</h3><ul><li>把笔记、摘录与资料放在同一个空间，用自然语言找回相关内容。</li><li>在生成的回答旁保留原文出处，让使用者能核对和继续阅读。</li><li>把新的问题和已有材料连接，帮助整理思路，而不替代独立判断。</li></ul><h3>如何验证这个想法？</h3><p>从一个小场景开始：让使用者带着真实问题，在自己的材料中完成一次检索和整理。观察是否找到了可靠依据，以及下一次是否还愿意使用。</p>'
  },
  workflow: {
    category: 'PRODUCT EXPLORATION / 002',
    label: '概念项目 · AI 产品 / 工作流',
    title: 'Flow · AI 工作流画布',
    description: '让复杂的过程，回归直觉。',
    body: '<div class="detail-notice"><strong>概念展示</strong><br>这是用于展示网站布局的产品构想，不代表田羽峰的真实项目或工作成果。</div><h3>把想法变成一条看得见的路径</h3><p>一项工作经常包含收集资料、整理、生成初稿、检查与交付。把这些环节画出来，可能比不断切换工具更容易理解和调整。</p><h3>交互上的三个取舍</h3><ul><li>用任务语言命名节点，让使用者先看懂要做什么。</li><li>每一步都能单独预览和修改，避免把整个过程变成黑箱。</li><li>在需要判断的环节保留人工确认，让自动化的边界清楚可见。</li></ul><h3>先做好一条流程</h3><p>优先选择一个边界清楚、重复出现的任务。观察使用者能否独立搭建、理解输出，以及在出错时找到原因，再决定是否增加节点和复杂度。</p>'
  },
  voice: {
    category: 'INTERACTION EXPERIMENT / 003',
    label: '概念实验 · 自然语音交互',
    title: '声间 · 让表达更轻松',
    description: '好的交互，像一次自然的对话。',
    body: '<div class="detail-notice"><strong>概念展示</strong><br>这是用于展示网站布局的交互构想，不代表田羽峰的真实项目或工作成果。</div><h3>从一句没说完整的话开始</h3><p>人说话时会停顿、改口，也会一边说一边想。语音产品的体验，不应只围绕识别一条完整指令设计。</p><h3>值得探索的细节</h3><ul><li>用明确且克制的状态反馈，表达正在听、正在处理和已经结束。</li><li>支持打断和纠正，让使用者随时取回对话的主动权。</li><li>在不确定时先确认意图，避免把猜测直接变成行动。</li></ul><h3>把测试放回真实环境</h3><p>在安静与嘈杂环境中分别测试，观察停顿、多人说话和临时改口时的表现。比起只记录是否识别成功，更应留意使用者是否知道下一步可以做什么。</p>'
  },
  problem: {
    category: 'NOTES & THOUGHTS / 001',
    label: '产品思考 · 示例随笔',
    title: '从一个问题开始，而不是一个模型',
    description: '当所有人都在讨论能力，产品经理更该追问什么？',
    body: '<div class="detail-notice">以下为网站的示例文章，供展示阅读体验，后续可替换为田羽峰的原创内容。</div><h3>先找到那个具体的人</h3><p>“我们可以用 AI 做什么”和“这个人现在有什么麻烦”，会把讨论带向不同的地方。前者容易产生一长串功能，后者则要求我们走近一个具体场景。</p><p>他在什么时刻遇到这个问题？现在怎么解决？哪一步最让他困扰？如果没有新产品，他会继续怎么做？这些问题并不新，却决定了后面的技术选择有没有意义。</p><h3>把能力翻译成结果</h3><p>能够总结一段文字，是一种能力；让一个人更快找到需要核对的关键内容，是一种可观察的结果。从能力走向结果，中间还有信息呈现、来源核对、错误处理和实际工作习惯。</p><h3>让一个小实验给出答案</h3><p>一个原型不必证明整套愿景。它可以只回答：使用者愿不愿意把一个真实任务交给它？他能否判断输出是否可用？如果暂时回答不了，继续堆叠功能也不会自动让问题变得清楚。</p>'
  },
  experience: {
    category: 'NOTES & THOUGHTS / 002',
    label: 'AI 体验 · 示例随笔',
    title: '好的 AI 体验，应该给人留一点余地',
    description: '可控感，也许和智能本身一样重要。',
    body: '<div class="detail-notice">以下为网站的示例文章，供展示阅读体验，后续可替换为田羽峰的原创内容。</div><h3>用户需要知道自己在哪里</h3><p>一个回答已经生成，并不意味着任务已经完成。使用者还需要理解它依据了什么、哪些地方有疑问、下一步能够如何修改。</p><h3>把控制权放在够得着的地方</h3><p>生成过程中能否停止？不满意时能否只改一部分？已经执行的动作能否撤销？这些看似普通的交互细节，会影响人愿意把多大的任务交给产品。</p><h3>让不确定性可以被理解</h3><p>一句笼统的免责声明，不如一个能点开的来源或一处明确的待确认内容。产品可以帮助使用者辨别哪些结果值得继续核对，而不是要求他无条件相信，或从头检查一切。</p><p>给人留一点余地，就是让人能够参与、修正，也能够说“这次先到这里”。</p>'
  },
  small: {
    category: 'NOTES & THOUGHTS / 003',
    label: '创造与实践 · 示例随笔',
    title: '先做一个小东西，再把它做得更好',
    description: '关于从想法到第一次真实反馈的距离。',
    body: '<div class="detail-notice">以下为网站的示例文章，供展示阅读体验，后续可替换为田羽峰的原创内容。</div><h3>把第一步缩小一点</h3><p>一个想法如果始终停在脑海里，很容易越长越大。把它做成可以被看见、被使用的小东西，才会遇到那些想象里没有的细节。</p><h3>让原型只回答一个问题</h3><p>它可以只是一个可点击的页面，一段手动跑通的流程，或一次由人协助完成的服务。关键是明确这次希望知道什么，而不是让原型看起来具备所有能力。</p><h3>观察行动，再听解释</h3><p>“这个想法不错”还不足以说明产品有用。更值得留意的是：使用者会在什么时候主动打开它？在哪里停住？下一次遇到同样的任务时，会不会再次选择它？</p><p>做小不是为了降低要求，而是为了更早获得能改变方向的证据。</p>'
  }
};

const dialog = document.querySelector('.detail-dialog');
let previousFocus = null;
document.querySelectorAll('[data-detail]').forEach(button => {
  button.addEventListener('click', () => {
    const detail = content[button.dataset.detail];
    if (!detail) return;
    previousFocus = button;
    document.getElementById('dialog-category').textContent = detail.category;
    document.getElementById('dialog-label').textContent = detail.label;
    document.getElementById('dialog-title').textContent = detail.title;
    document.getElementById('dialog-description').textContent = detail.description;
    // Only the fixed, local editorial content above is inserted as markup.
    document.getElementById('dialog-content').innerHTML = detail.body;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
  });
});
function closeDialog() { dialog.close(); }
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
document.querySelector('.dialog-done').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeDialog();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  previousFocus?.focus({preventScroll: true});
});

const buddyButton = document.querySelector('.buddy-button');
const buddyGreeting = document.getElementById('buddy-greeting');
const greetings = ['你好呀，一起创造点什么！', '一个好问题，就是新起点。', '保持好奇，今天也有新发现！', '嗨，欢迎来到我的小宇宙！'];
let greetingIndex = 0;
buddyButton.addEventListener('click', () => {
  buddyGreeting.textContent = greetings[greetingIndex % greetings.length];
  greetingIndex += 1;
  buddyButton.classList.remove('greet');
  requestAnimationFrame(() => buddyButton.classList.add('greet'));
});
buddyButton.addEventListener('animationend', () => buddyButton.classList.remove('greet'));

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  nav.classList.toggle('open', open);
}
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) setMenu(false); });
window.matchMedia('(max-width: 620px)').addEventListener('change', () => setMenu(false));

const sections = [...document.querySelectorAll('main > section[id], .notes-section[id]')];
let scheduled = false;
function updateActiveNavigation() {
  let current = 'home';
  const threshold = window.innerHeight * .38;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section.id;
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    const active = link.hash === '#' + current;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateActiveNavigation); }
}, {passive: true});
updateActiveNavigation();
document.getElementById('year').textContent = new Date().getFullYear();
