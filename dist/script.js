'use strict';

const content = {
  knowledge: {
    category: 'OPEN SOURCE / 001',
    label: 'Agent Skill · 景观可视化',
    title: 'Landscape Sketch · 景观手绘 Skill',
    description: '将景观设计想法整理成图像模型可用的提示词。',
    body: '<h3>从设计想法到图像提示词</h3><p>输出英文提示词、中文说明、可调参数与图纸检查清单，适用于公园、广场、滨水空间、庭院、街道及儿童游乐场的概念表达。</p><h3>支持的工作流</h3><ul><li>彩色平面图、手绘透视与鸟瞰、剖面与立面、概念分析图。</li><li>固定空间布局，调整四季植物与时段氛围。</li><li>马克笔、水彩淡彩与写实渲染风格。</li></ul><p>Skill 本身提供提示词，不包含 API 调用脚本；生成图片需要宿主提供图像工具。AI 图用于概念表达，不能直接作为施工图。</p><a class="inline-link" href="https://github.com/buu206/landscape-sketch-skill" target="_blank" rel="noopener noreferrer">查看 GitHub 项目 ↗</a>'
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
    label: 'AI 产品 · 公众号文章',
    title: '系统提示词，其实就是写给AI的PRD',
    description: '阅读公众号原文。',
    body: '<a href="https://mp.weixin.qq.com/s/QqcKhCSQw93n_OK1ipQWBA" target="_blank" rel="noopener noreferrer">阅读公众号原文 ↗</a>'
  }
};

const osWindow = document.getElementById('desktop-window');
const mainPanel = document.getElementById('main-panel');
const tabs = [...document.querySelectorAll('[data-view]')];
const panels = [...document.querySelectorAll('.page-view')];
const viewNames = {about:'关于我',product:'产品探索',tool:'工具索引',notes:'文章',contact:'保持联系'};
const mobileLayout = window.matchMedia('(max-width: 800px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentView = 'about';
let manualSidebar = null;
let compact = false;

function setCompact(value) {
  compact = value;
  osWindow.classList.toggle('is-compact', compact);
  document.getElementById('profile-details').hidden = compact;
  document.querySelector('.compact-profile').hidden = !compact;
  const toggle = document.getElementById('sidebar-toggle');
  toggle.setAttribute('aria-expanded', String(!compact));
  toggle.setAttribute('aria-label', compact ? '展开个人信息栏' : '收起个人信息栏');
}
function selectView(name, options = {}) {
  if (!viewNames[name]) name = 'about';
  currentView = name;
  osWindow.dataset.activeView = name;
  tabs.forEach(tab => {
    const active = tab.dataset.view === name;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  panels.forEach(panel => { panel.hidden = panel.id !== 'view-' + name; });
  document.getElementById('window-path').textContent = '~/ ' + name.toUpperCase();
  document.title = '田羽峰 · 个人 OS / ' + viewNames[name];
  setCompact(manualSidebar === null ? name === 'notes' : manualSidebar);
  mainPanel.scrollTop = 0;
  if (options.updateHash !== false && location.hash !== '#' + name) history.pushState({view:name}, '', '#' + name);
  if (mobileLayout.matches && !options.initial) window.scrollTo({top:0,behavior:'instant'});
  if (options.focusMain) mainPanel.focus({preventScroll:true});
}
function locationView() {
  const aliases = {home:'about',work:'product',writing:'notes'};
  const name = location.hash.slice(1) || new URLSearchParams(location.search).get('view') || 'about';
  return aliases[name] || name;
}
tabs.forEach((tab,index) => {
  tab.addEventListener('click', () => selectView(tab.dataset.view));
  tab.addEventListener('keydown', event => {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    selectView(tabs[next].dataset.view);
    tabs[next].focus({preventScroll:true});
  });
});
document.querySelectorAll('[data-jump]').forEach(button => button.addEventListener('click', () => selectView(button.dataset.jump, {focusMain:true})));
document.querySelector('.os-logo').addEventListener('click', event => { event.preventDefault(); selectView('about'); });
window.addEventListener('popstate', () => selectView(locationView(), {updateHash:false}));
window.addEventListener('hashchange', () => selectView(locationView(), {updateHash:false}));
function updateTabOrientation() { document.querySelector('.view-tabs').setAttribute('aria-orientation', mobileLayout.matches ? 'horizontal' : 'vertical'); }
mobileLayout.addEventListener('change', updateTabOrientation);
updateTabOrientation();
selectView(locationView(), {updateHash:false,initial:true});

document.getElementById('sidebar-toggle').addEventListener('click', () => { manualSidebar = !compact; setCompact(manualSidebar); });
document.querySelector('.compact-avatar').addEventListener('click', () => { manualSidebar = false; setCompact(false); });
document.querySelector('.polaroid').addEventListener('click', event => {
  if (!reducedMotion.matches) event.currentTarget.animate([
    {transform:'rotate(-5deg)'},{transform:'rotate(5deg)',offset:.25},
    {transform:'rotate(-8deg)',offset:.5},{transform:'rotate(2deg)',offset:.75},{transform:'rotate(-5deg)'}
  ], {duration:750,easing:'ease-in-out'});
});

const articleLinks = {problem:'https://mp.weixin.qq.com/s/FZ6ikyZfcFKVSd_QdACczA',experience:'https://mp.weixin.qq.com/s/9V9A3rPhE8edlX4A97FhrQ',small:'https://mp.weixin.qq.com/s/QqcKhCSQw93n_OK1ipQWBA'};
const detailDialog = document.querySelector('.detail-dialog');
let previousDetailFocus = null;
function openDetail(key, trigger = document.activeElement) {
  if (articleLinks[key]) {
    window.open(articleLinks[key], '_blank', 'noopener,noreferrer');
    return;
  }
  const item = content[key];
  if (!item) return;
  previousDetailFocus = trigger;
  document.getElementById('dialog-category').textContent = item.category;
  document.getElementById('dialog-label').textContent = item.label;
  document.getElementById('dialog-title').textContent = item.title;
  document.getElementById('dialog-description').textContent = item.description;
  // Article markup is fixed local editorial content; search input is never rendered as HTML.
  document.getElementById('dialog-content').innerHTML = item.body;
  detailDialog.showModal();
  detailDialog.scrollTop = 0;
}
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => openDetail(button.dataset.detail, button)));
document.querySelector('.dialog-close').addEventListener('click', () => detailDialog.close());
document.querySelector('.dialog-done').addEventListener('click', () => detailDialog.close());
detailDialog.addEventListener('close', () => {
  if (previousDetailFocus?.isConnected && !previousDetailFocus.closest('[hidden]')) previousDetailFocus.focus({preventScroll:true});
});
function closeOnBackdrop(dialog) {
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
}
closeOnBackdrop(detailDialog);

document.querySelectorAll('[data-expand-note]').forEach(button => {
  button.addEventListener('click', () => {
    const wasOpen = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('[data-expand-note]').forEach(toggle => {
      const open = toggle === button && !wasOpen;
      toggle.setAttribute('aria-expanded', String(open));
      document.getElementById(toggle.getAttribute('aria-controls')).hidden = !open;
      toggle.closest('.note-card').classList.toggle('is-open', open);
    });
  });
});
document.querySelector('.random-note').addEventListener('click', event => {
  const keys = ['problem','experience','small'];
  openDetail(keys[Math.floor(Math.random() * keys.length)], event.currentTarget);
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.product-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
  });
});

const searchDialog = document.querySelector('.search-dialog');
const queryInput = document.getElementById('command-query');
const commandList = document.getElementById('command-results');
const searchRecords = [
  {label:'关于我',subtitle:'页面 · 田羽峰 / AI 产品经理',keywords:'about 个人 简介 姓名',icon:'user',view:'about'},
  {label:'产品探索',subtitle:'页面 · 三个产品概念',keywords:'product 作品 项目',icon:'cube',view:'product'},
  {label:'工具索引',subtitle:'页面 · 工具与公开资源',keywords:'tool 工具 pi github',icon:'tool',view:'tool'},
  {label:'文章',subtitle:'页面 · 产品与体验的思考',keywords:'notes 文章 随笔 写作',icon:'note',view:'notes'},
  {label:'保持联系',subtitle:'页面 · GitHub / @buu206',keywords:'contact 联系 github 主页',icon:'mail',view:'contact'},
  {label:'Landscape Sketch · 景观手绘 Skill',subtitle:'开源项目 · 景观可视化',keywords:'knowledge landscape sketch skill 景观 手绘 提示词',icon:'book',detail:'knowledge'},
  {label:'Flow · AI 工作流画布',subtitle:'概念产品 · 工作流',keywords:'workflow flow 产品 流程 自动化',icon:'flow',detail:'workflow'},
  {label:'声间 · 自然语音交互',subtitle:'交互概念 · 语音体验',keywords:'voice 产品 对话 声音',icon:'wave',detail:'voice'},
  {label:'从一个问题开始，而不是一个模型',subtitle:'公众号文章 · 产品思考',keywords:'problem 文章 需求 场景',icon:'note',detail:'problem'},
  {label:'好的 AI 体验，应该给人留一点余地',subtitle:'公众号文章 · AI 体验',keywords:'experience 文章 信任 可控',icon:'note',detail:'experience'},
  {label:'系统提示词，其实就是写给AI的PRD',subtitle:'公众号文章 · AI 产品',keywords:'small 文章 系统提示词 PRD AI',icon:'note',detail:'small'},
  {label:'Pi Agent',subtitle:'工具索引 · 终端 AI Agent',keywords:'pi agent coding 编程 工具',icon:'code',view:'tool'},
  {label:'GitHub CLI',subtitle:'工具索引 · 命令行与发布',keywords:'github gh 工具 源码',icon:'github',view:'tool'}
];
let filteredRecords = [];
let activeResult = 0;
let previousSearchFocus = null;
function setActiveResult(index) {
  if (!filteredRecords.length) { queryInput.removeAttribute('aria-activedescendant'); return; }
  activeResult = (index + filteredRecords.length) % filteredRecords.length;
  [...commandList.querySelectorAll('.command-result')].forEach((option,i) => {
    option.classList.toggle('active', i === activeResult);
    option.setAttribute('aria-selected', String(i === activeResult));
  });
  const option = document.getElementById('command-option-' + activeResult);
  queryInput.setAttribute('aria-activedescendant', option.id);
  option.scrollIntoView({block:'nearest'});
}
function executeResult(record) {
  searchDialog.close();
  if (record.detail) openDetail(record.detail, previousSearchFocus);
  else selectView(record.view, {focusMain:true});
}
function renderResults() {
  const term = queryInput.value.trim().toLowerCase().normalize('NFKC');
  filteredRecords = term ? searchRecords.filter(record => (record.label + ' ' + record.subtitle + ' ' + record.keywords).toLowerCase().normalize('NFKC').includes(term)) : searchRecords.slice(0,8);
  commandList.replaceChildren();
  document.getElementById('search-result-count').textContent = term ? filteredRecords.length + ' 个结果' : '快速跳转';
  if (!filteredRecords.length) {
    const empty = document.createElement('p');
    empty.className = 'search-empty';
    empty.textContent = '暂时没有找到相关内容，试试「产品」或「文章」。';
    commandList.append(empty);
    queryInput.removeAttribute('aria-activedescendant');
    return;
  }
  filteredRecords.forEach((record,index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'command-result';
    button.id = 'command-option-' + index;
    button.setAttribute('role','option');
    button.tabIndex = -1;
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.classList.add('icon');
    const use = document.createElementNS('http://www.w3.org/2000/svg','use');
    use.setAttribute('href','#i-' + record.icon);
    svg.append(use);
    const label = document.createElement('span');
    label.textContent = record.label;
    const subtitle = document.createElement('small');
    subtitle.textContent = record.subtitle;
    label.append(subtitle);
    const arrow = document.createElement('kbd');
    arrow.textContent = '↵';
    button.append(svg,label,arrow);
    button.addEventListener('click', () => executeResult(record));
    button.addEventListener('pointermove', () => setActiveResult(index));
    commandList.append(button);
  });
  setActiveResult(0);
}
function openSearch(trigger = document.activeElement) {
  previousSearchFocus = trigger;
  if (detailDialog.open) detailDialog.close();
  queryInput.value = '';
  searchDialog.showModal();
  renderResults();
  queryInput.focus();
}
queryInput.setAttribute('role','combobox');
queryInput.setAttribute('aria-autocomplete','list');
queryInput.setAttribute('aria-expanded','true');
commandList.setAttribute('role','listbox');
commandList.setAttribute('aria-label','搜索结果');
document.querySelectorAll('[data-open-search]').forEach(button => button.addEventListener('click', () => openSearch(button)));
queryInput.addEventListener('input', renderResults);
queryInput.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    setActiveResult(activeResult + (event.key === 'ArrowDown' ? 1 : -1));
  } else if (event.key === 'Enter' && filteredRecords[activeResult]) {
    event.preventDefault();
    executeResult(filteredRecords[activeResult]);
  }
});
document.querySelector('.search-close').addEventListener('click', () => searchDialog.close());
searchDialog.addEventListener('close', () => {
  if (!detailDialog.open && previousSearchFocus?.isConnected) previousSearchFocus.focus({preventScroll:true});
});
closeOnBackdrop(searchDialog);
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (searchDialog.open) searchDialog.close();
    else openSearch();
  }
});

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3000);
}
document.querySelectorAll('[data-copy-link]').forEach(button => button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('https://buu206.github.io/');
    showToast('主页链接已复制，期待下一次相遇。');
  } catch {
    showToast('请手动复制：https://buu206.github.io/');
  }
}));
document.getElementById('year').textContent = new Date().getFullYear();
