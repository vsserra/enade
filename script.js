/* ── Logo Wyden SVG (paths extraídos do .docx) ── */
const WYDEN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1395730 458470" width="110" height="36" style="display:block;flex-shrink:0;">
  <path fill="#000" d="
    M883941,133749 L825696,133749 L825696,0 L883941,0 Z
    M743718,328984 L701516,320304 L668618,295948 L647247,258448 L639630,210331
    L647247,162213 L668618,124715 L701516,100362 L743718,91683 L768510,94540
    L790774,102806 L810004,116028 L825696,133749 L883941,133749 L883941,142915
    L762056,142915 L736498,147836 L716551,161657 L703581,182961 L698955,210331
    L703581,237703 L716551,259006 L736498,272827 L762056,277748 L883941,277748
    L883941,282603 L828393,282603 L813267,302134 L793539,316713 L770070,325832 Z
    M883941,277748 L762056,277748 L787613,272827 L807559,259006 L820529,237703
    L825156,210331 L820529,182961 L807559,161657 L787613,147836 L762056,142915
    L883941,142915 Z
    M883941,323590 L833248,323590 L828393,282603 L883941,282603 Z
    M335421,277748 L250245,277748 L265193,275380 L276399,268512 L284369,257497
    L289608,242690 L310109,156936 L320816,128084 L336734,107726 L357810,95660
    L383994,91683 L412106,96233 L432938,109480 L445882,130817 L447750,142915
    L374823,142915 L371047,146152 L368354,156936 L346780,248086 Z
    M87368,328984 L50282,322781 L22853,305251 L5839,278015 L0,242690 L0,97073
    L58241,97073 L58241,242690 L60352,257497 L60449,258178 L67006,269117
    L77810,275607 L92758,277748 L335421,277748 L335319,278015 L335215,278287
    L167723,278287 L155549,300087 L137861,315973 L115016,325689 Z
    M250245,277748 L92758,277748 L109900,274705 L123097,264331 L133259,244755
    L141298,214108 L164490,97073 L215188,97073 L215188,242690 L217520,257497
    L217556,257725 L224297,268512 L224424,268714 L235314,275380 L234948,275380 Z
    M597755,272352 L496709,272352 L522994,265932 L540330,244444 L549878,204551
    L552802,142915 L552802,97073 L611047,97073 L610934,146152 L609054,199961
    L602890,250610 Z
    M483227,323590 L445007,317217 L445239,317217 L416620,298915 L398435,269438
    L392082,229748 L392082,147231 L388306,142915 L447750,142915 L450332,159639
    L450332,229748 L453603,248086 L453710,248691 L463206,261971 L477859,269791
    L496709,272352 L597755,272352 L592276,295546 L585851,312260 L527995,312260
    L518875,317217 L508442,320757 L497153,322781 L498490,322781 Z
    M250245,328984 L220589,325689 L197052,315973 L179480,300087 L167723,278287
    L335215,278287 L332530,285298 L311252,310377 L283605,324534 Z
    M462731,458417 L429297,412575 L461705,390379 L488754,366464 L510750,340525
    L527995,312260 L585851,312260 L576935,335452 L556588,371009 L530957,402900
    L499764,431809 Z
    M1036029,328984 L987121,320388 L948932,296218 L924090,258903 L915226,210870
    L923812,162898 L947920,125188 L985072,100523 L1032791,91683 L1078366,99764
    L1113423,122761 L1124330,140218 L1032791,140218 L1012030,143395 L995312,152690
    L983042,167751 L975626,188222 L1140899,188222 L1143897,206016 L1143787,211950
    L1143424,218287 L1142757,224826 L1141734,231362 L974011,231362 L981046,251378
    L994301,266489 L1012916,276037 L1036029,279366 L1118877,279366 L1129335,293928
    L1110357,308732 L1087940,319747 L1062895,326615 Z
    M1140899,188222 L1087810,188222 L1082245,168435 L1070816,153299 L1054129,143623
    L1032791,140218 L1124330,140218 L1135941,158802 Z
    M1118877,279366 L1036029,279366 L1053136,277781 L1070142,273163 L1086542,265712
    L1101831,255634 Z
    M1381588,134827 L1230186,134827 L1244606,116483 L1262615,102941 L1283961,94557
    L1308392,91683 L1344484,98424 L1371827,117704 Z
    M1233418,323590 L1175176,323590 L1175176,97073 L1225865,97073 L1230186,134827
    L1381588,134827 L1386198,142915 L1288428,142915 L1265502,147617 L1248185,161118
    L1237236,182506 L1233418,210870 Z
    M1395216,323590 L1336975,323590 L1336975,195235 L1333562,173406 L1323828,156938
    L1308531,146538 L1288428,142915 L1386198,142915 L1389159,148108 L1395216,188222 Z
  "/>
</svg>`;

const ANSWER_LINES = 22;
const LABELS = ['a', 'b'];

let questions = [
  {
    id: 1,
    title: 'Questão 1',
    context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Considere a seguinte situação hipotética e faça o que se pede nos itens a seguir.',
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ]
  },
  {
    id: 2,
    title: 'Questão 2',
    context: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.\n\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Considere a seguinte situação hipotética e faça o que se pede nos itens a seguir.',
    items: [
      'Ut labore et dolore magnam aliquam quaerat voluptatem.',
      'Quis autem vel eum iure reprehenderit qui voluptate velit.'
    ]
  }
];

let nextId = 3;
const contextSelections = {};
let activeContextImage = null;
let activeImageResize = null;
let activePreviewImage = null;
let activePreviewResize = null;

/* ── Helpers ── */
function escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function getItemLabel(index, upper = false) {
  let n = Number(index) || 0;
  let label = '';
  do {
    label = String.fromCharCode(97 + (n % 26)) + label;
    n = Math.floor(n / 26) - 1;
  } while (n >= 0);
  return upper ? label.toUpperCase() : label;
}

function getAnswerLineAllocation(itemCount) {
  const count = Math.max(1, Number(itemCount) || 1);
  const base = Math.floor(ANSWER_LINES / count);
  const remainder = ANSWER_LINES % count;
  return Array.from({ length: count }, (_, index) => Math.max(1, base + (index < remainder ? 1 : 0)));
}

function buildAnswerAreaHTML(itemCount) {
  return getAnswerLineAllocation(itemCount).map((lineCount, index) => {
    const linesHtml = Array.from({ length: lineCount }, () => '<div class="answer-line"></div>').join('');
    return `
      <div class="answer-item-row">
        <div class="answer-item-cell">${getItemLabel(index, true)}</div>
        <div class="answer-lines-cell">${linesHtml}</div>
      </div>
    `;
  }).join('');
}

function plainTextToContextHtml(str) {
  const text = String(str || '').trim();
  if (!text) return '';
  return text.split(/\n{2,}/)
    .map(para => `<p>${escHtml(para).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

function contextToHtml(str) {
  const value = String(str || '');
  return /<\/?[a-z][\s\S]*>/i.test(value) ? sanitizeContextHtml(value) : plainTextToContextHtml(value);
}

function sanitizeContextHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = String(html || '');
  const allowedTags = new Set(['B', 'STRONG', 'U', 'BR', 'P', 'DIV', 'SPAN', 'IMG']);

  function cleanNode(node) {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent || '');
    if (node.nodeType !== Node.ELEMENT_NODE) return document.createTextNode('');

    const tag = node.tagName;
    if (!allowedTags.has(tag)) {
      const fragment = document.createDocumentFragment();
      node.childNodes.forEach(child => fragment.appendChild(cleanNode(child)));
      return fragment;
    }

    const clean = document.createElement(tag.toLowerCase());
    if (tag === 'IMG') {
      const src = node.getAttribute('src') || '';
      if (/^(data:image\/|https?:\/\/)/i.test(src)) clean.setAttribute('src', src);
      clean.setAttribute('alt', '');
      const width = Number.parseFloat(node.style.width || node.getAttribute('width') || '');
      if (Number.isFinite(width) && width > 0) {
        clean.style.width = `${Math.min(Math.max(width, 24), 1600)}px`;
        clean.style.height = 'auto';
      }
    }
    if (tag === 'SPAN') {
      const style = node.getAttribute('style') || '';
      if (/font-weight\s*:\s*(bold|700)/i.test(style)) clean.style.fontWeight = '700';
      if (/text-decoration[^;]*underline/i.test(style)) clean.style.textDecoration = 'underline';
    }
    node.childNodes.forEach(child => clean.appendChild(cleanNode(child)));
    return clean;
  }

  const output = document.createElement('div');
  template.content.childNodes.forEach(child => output.appendChild(cleanNode(child)));
  return output.innerHTML;
}

/* ── Tab switching ── */
function setTab(tab) {
  document.getElementById('panel-editor').classList.toggle('hidden', tab !== 'editor');
  document.getElementById('tab-editor').classList.toggle('active', tab === 'editor');
  document.getElementById('tab-preview').classList.toggle('active', tab === 'preview');
}

/* ── Question management ── */
function addQuestion() {
  questions.push({ id: nextId++, title: `Questão ${questions.length + 1}`, context: '', items: ['', ''] });
  render();
}
function removeQuestion(id) {
  if (questions.length === 1) return alert('A prova precisa de ao menos uma questão.');
  questions = questions.filter(q => q.id !== id);
  render();
}
function onTitleChange(id, val)    { questions.find(q => q.id === id).title = val;       renderPreview(); }
function onContextChange(id, val)  { questions.find(q => q.id === id).context = sanitizeContextHtml(val); renderPreview(); }
function onItemChange(qId, i, val) { questions.find(q => q.id === qId).items[i] = val;   renderPreview(); }
function addItem(qId) {
  const question = questions.find(q => q.id === qId);
  if (!question) return;
  question.items.push('');
  render();
}
function removeItem(qId, index) {
  const question = questions.find(q => q.id === qId);
  if (!question) return;
  if (question.items.length === 1) return alert('A questão precisa de ao menos um item.');
  question.items.splice(index, 1);
  render();
}

function saveContextSelection(id) {
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return;
  const editor = document.getElementById(`ctx-editor-${id}`);
  if (!editor || !editor.contains(sel.anchorNode)) return;
  contextSelections[id] = sel.getRangeAt(0).cloneRange();
}

function restoreContextSelection(id) {
  const editor = document.getElementById(`ctx-editor-${id}`);
  if (!editor) return;
  editor.focus();
  const sel = window.getSelection();
  if (!sel) return;
  sel.removeAllRanges();
  if (contextSelections[id]) {
    sel.addRange(contextSelections[id]);
  } else {
    const range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    sel.addRange(range);
  }
}

function onContextEditorInput(el, id) {
  onContextChange(id, el.innerHTML);
  saveContextSelection(id);
  positionContextImageHandles();
}

function formatContext(id, command) {
  restoreContextSelection(id);
  document.execCommand(command, false, null);
  const editor = document.getElementById(`ctx-editor-${id}`);
  onContextEditorInput(editor, id);
}

function triggerContextImage(id) {
  restoreContextSelection(id);
  document.getElementById(`ctx-image-${id}`)?.click();
}

function insertContextImage(input, id) {
  const file = input.files?.[0];
  if (!file) return;
  insertContextImageFile(file, id, input);
}

function insertContextImageFile(file, id, inputToClear) {
  if (!file || !file.type?.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = () => {
    restoreContextSelection(id);
    document.execCommand('insertImage', false, reader.result);
    const editor = document.getElementById(`ctx-editor-${id}`);
    const inserted = [...editor.querySelectorAll('img')].at(-1);
    if (inserted) {
      inserted.style.maxWidth = '100%';
      inserted.style.height = 'auto';
    }
    onContextEditorInput(editor, id);
    if (inserted) selectContextImage(inserted, id);
    if (inputToClear) inputToClear.value = '';
  };
  reader.readAsDataURL(file);
}

function insertPlainTextAtSelection(text, id) {
  restoreContextSelection(id);
  document.execCommand('insertText', false, text);
  const editor = document.getElementById(`ctx-editor-${id}`);
  onContextEditorInput(editor, id);
}

function handleContextPaste(event, id) {
  event.preventDefault();
  const clipboard = event.clipboardData;
  if (!clipboard) return;

  const imageFile = [...clipboard.files].find(file => file.type.startsWith('image/'));
  if (imageFile) {
    insertContextImageFile(imageFile, id);
    return;
  }

  const html = clipboard.getData('text/html') || '';
  const imageSources = [];
  if (html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    template.content.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src') || '';
      if (src.startsWith('data:image/')) imageSources.push(src);
    });
  }

  const text = clipboard.getData('text/plain') || '';
  if (text) insertPlainTextAtSelection(text, id);

  imageSources.forEach(src => {
    restoreContextSelection(id);
    document.execCommand('insertImage', false, src);
  });
  if (imageSources.length) {
    const editor = document.getElementById(`ctx-editor-${id}`);
    editor.querySelectorAll('img').forEach(img => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });
    onContextEditorInput(editor, id);
  }
}

function getContextIdFromEditor(editor) {
  return Number(editor?.id?.replace('ctx-editor-', ''));
}

function clearContextImageSelection() {
  document.querySelectorAll('.ctx-image-selected').forEach(img => img.classList.remove('ctx-image-selected'));
  document.querySelectorAll('.ctx-resize-handle').forEach(handle => handle.remove());
  activeContextImage = null;
}

function selectContextImage(img, id) {
  clearContextImageSelection();
  activeContextImage = { img, id };
  img.classList.add('ctx-image-selected');
  showContextImageHandles(img, id);
  if (!img.complete) img.addEventListener('load', positionContextImageHandles, { once: true });
  setTimeout(positionContextImageHandles, 0);
}

function showContextImageHandles(img, id) {
  const editor = img.closest('.ctx-editor');
  if (!editor) return;
  ['nw', 'ne', 'sw', 'se'].forEach(corner => {
    const handle = document.createElement('span');
    handle.className = 'ctx-resize-handle';
    handle.dataset.corner = corner;
    handle.contentEditable = 'false';
    handle.addEventListener('mousedown', event => startContextImageResize(event, img, id, corner));
    editor.appendChild(handle);
  });
  positionContextImageHandles();
}

function positionContextImageHandles() {
  if (!activeContextImage?.img?.isConnected) return;
  const { img } = activeContextImage;
  const editor = img.closest('.ctx-editor');
  if (!editor) return;
  const editorRect = editor.getBoundingClientRect();
  const imgRect = img.getBoundingClientRect();
  const points = {
    nw: [imgRect.left - editorRect.left + editor.scrollLeft - 7, imgRect.top - editorRect.top + editor.scrollTop - 7],
    ne: [imgRect.right - editorRect.left + editor.scrollLeft - 7, imgRect.top - editorRect.top + editor.scrollTop - 7],
    sw: [imgRect.left - editorRect.left + editor.scrollLeft - 7, imgRect.bottom - editorRect.top + editor.scrollTop - 7],
    se: [imgRect.right - editorRect.left + editor.scrollLeft - 7, imgRect.bottom - editorRect.top + editor.scrollTop - 7],
  };
  editor.querySelectorAll('.ctx-resize-handle').forEach(handle => {
    const [left, top] = points[handle.dataset.corner];
    handle.style.left = `${left}px`;
    handle.style.top = `${top}px`;
  });
}

function startContextImageResize(event, img, id, corner) {
  event.preventDefault();
  event.stopPropagation();
  const editor = img.closest('.ctx-editor');
  if (!editor) return;
  const rect = img.getBoundingClientRect();
  activeImageResize = {
    img, id, corner, editor,
    startX: event.clientX,
    startY: event.clientY,
    startWidth: rect.width,
    aspect: rect.width / Math.max(rect.height, 1),
  };
  document.addEventListener('mousemove', resizeContextImage);
  document.addEventListener('mouseup', finishContextImageResize);
}

function resizeContextImage(event) {
  if (!activeImageResize) return;
  const { img, corner, editor, startX, startY, startWidth, aspect } = activeImageResize;
  const dx = event.clientX - startX;
  const dy = event.clientY - startY;
  const horizontal = corner.includes('e') ? dx : -dx;
  const verticalAsWidth = (corner.includes('s') ? dy : -dy) * aspect;
  const delta = Math.abs(horizontal) >= Math.abs(verticalAsWidth) ? horizontal : verticalAsWidth;
  const maxWidth = editor.clientWidth - 18;
  const nextWidth = Math.min(Math.max(40, startWidth + delta), maxWidth);
  img.style.width = `${Math.round(nextWidth)}px`;
  img.style.height = 'auto';
  positionContextImageHandles();
}

function finishContextImageResize() {
  if (!activeImageResize) return;
  const { editor, id } = activeImageResize;
  activeImageResize = null;
  document.removeEventListener('mousemove', resizeContextImage);
  document.removeEventListener('mouseup', finishContextImageResize);
  onContextEditorInput(editor, id);
}

function setupContextImageEditors() {
  document.querySelectorAll('.ctx-editor').forEach(editor => {
    const id = getContextIdFromEditor(editor);
    editor.querySelectorAll('img').forEach(img => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });
    editor.addEventListener('mousedown', event => {
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
        event.stopPropagation();
        selectContextImage(event.target, id);
        return;
      }
      if (!event.target.classList?.contains('ctx-resize-handle')) {
        clearContextImageSelection();
      }
    });
    editor.addEventListener('scroll', positionContextImageHandles);
  });
}

function clearPreviewImageSelection() {
  document.querySelectorAll('.preview-image-selected').forEach(img => img.classList.remove('preview-image-selected'));
  document.querySelectorAll('.preview-resize-handle').forEach(handle => handle.remove());
  activePreviewImage = null;
}

function selectPreviewImage(img) {
  const qContext = img.closest('.q-context');
  const qId = Number(qContext?.dataset.qId);
  if (!qContext || !qId) return;
  clearPreviewImageSelection();
  activePreviewImage = { img, qId };
  img.classList.add('preview-image-selected');
  showPreviewImageHandles(img, qId);
  if (!img.complete) img.addEventListener('load', positionPreviewImageHandles, { once: true });
  setTimeout(positionPreviewImageHandles, 0);
}

function showPreviewImageHandles(img, qId) {
  const page = img.closest('.page-a4');
  if (!page) return;
  ['nw', 'ne', 'sw', 'se'].forEach(corner => {
    const handle = document.createElement('span');
    handle.className = 'preview-resize-handle';
    handle.dataset.corner = corner;
    handle.addEventListener('mousedown', event => startPreviewImageResize(event, img, qId, corner));
    page.appendChild(handle);
  });
  positionPreviewImageHandles();
}

function positionPreviewImageHandles() {
  if (!activePreviewImage?.img?.isConnected) return;
  const { img } = activePreviewImage;
  const page = img.closest('.page-a4');
  if (!page) return;
  const pageRect = page.getBoundingClientRect();
  const imgRect = img.getBoundingClientRect();
  const points = {
    nw: [imgRect.left - pageRect.left - 7, imgRect.top - pageRect.top - 7],
    ne: [imgRect.right - pageRect.left - 7, imgRect.top - pageRect.top - 7],
    sw: [imgRect.left - pageRect.left - 7, imgRect.bottom - pageRect.top - 7],
    se: [imgRect.right - pageRect.left - 7, imgRect.bottom - pageRect.top - 7],
  };
  page.querySelectorAll('.preview-resize-handle').forEach(handle => {
    const [left, top] = points[handle.dataset.corner];
    handle.style.left = `${left}px`;
    handle.style.top = `${top}px`;
  });
}

function startPreviewImageResize(event, img, qId, corner) {
  event.preventDefault();
  event.stopPropagation();
  const qContext = img.closest('.q-context');
  if (!qContext) return;
  const rect = img.getBoundingClientRect();
  activePreviewResize = {
    img, qId, corner, qContext,
    startX: event.clientX,
    startY: event.clientY,
    startWidth: rect.width,
    aspect: rect.width / Math.max(rect.height, 1),
  };
  document.addEventListener('mousemove', resizePreviewImage);
  document.addEventListener('mouseup', finishPreviewImageResize);
}

function resizePreviewImage(event) {
  if (!activePreviewResize) return;
  const { img, corner, qContext, startX, startY, startWidth, aspect } = activePreviewResize;
  const dx = event.clientX - startX;
  const dy = event.clientY - startY;
  const horizontal = corner.includes('e') ? dx : -dx;
  const verticalAsWidth = (corner.includes('s') ? dy : -dy) * aspect;
  const delta = Math.abs(horizontal) >= Math.abs(verticalAsWidth) ? horizontal : verticalAsWidth;
  const maxWidth = qContext.clientWidth;
  const nextWidth = Math.min(Math.max(40, startWidth + delta), maxWidth);
  img.style.width = `${Math.round(nextWidth)}px`;
  img.style.height = 'auto';
  positionPreviewImageHandles();
}

function finishPreviewImageResize() {
  if (!activePreviewResize) return;
  const { img, qContext, qId } = activePreviewResize;
  img.style.width = `${Math.round(img.getBoundingClientRect().width)}px`;
  img.style.height = 'auto';
  activePreviewResize = null;
  document.removeEventListener('mousemove', resizePreviewImage);
  document.removeEventListener('mouseup', finishPreviewImageResize);

  const question = questions.find(q => q.id === qId);
  if (question) {
    question.context = sanitizeContextHtml(qContext.innerHTML);
    const editor = document.getElementById(`ctx-editor-${qId}`);
    if (editor) editor.innerHTML = contextToHtml(question.context);
  }
  clearPreviewImageSelection();
  setupContextImageEditors();
  renderPreview();
}

function setupPreviewImageEditors() {
  document.querySelectorAll('#pages-container .q-context').forEach(qContext => {
    qContext.querySelectorAll('img').forEach(img => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });
    qContext.addEventListener('mousedown', event => {
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
        event.stopPropagation();
        selectPreviewImage(event.target);
        return;
      }
      if (!event.target.classList?.contains('preview-resize-handle')) {
        clearPreviewImageSelection();
      }
    });
  });
}

function autoResizeTextarea(el) {
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
}

function onItemTextareaInput(el, qId, i) {
  onItemChange(qId, i, el.value);
  autoResizeTextarea(el);
}

function resizeItemTextareas() {
  document.querySelectorAll('.item-row textarea').forEach(autoResizeTextarea);
}

/* ── Render editor panel ── */
function renderEditor() {
  document.getElementById('questions-list').innerHTML = questions.map(q => `
    <div class="q-card">
      <div class="q-card-head">
        <input type="text" value="${escHtml(q.title)}" oninput="onTitleChange(${q.id}, this.value)">
        <button class="btn-rm-q" onclick="removeQuestion(${q.id})">×</button>
      </div>
      <div class="q-card-body">
        <label class="field-label">Contexto / Enunciado</label>
        <div class="ctx-toolbar">
          <button type="button" class="ctx-tool" title="Negrito" onmousedown="event.preventDefault(); formatContext(${q.id}, 'bold')">B</button>
          <button type="button" class="ctx-tool" title="Sublinhado" onmousedown="event.preventDefault(); formatContext(${q.id}, 'underline')"><u>U</u></button>
          <button type="button" class="ctx-tool" title="Inserir imagem" onmousedown="event.preventDefault(); triggerContextImage(${q.id})">Img</button>
          <input type="file" id="ctx-image-${q.id}" accept="image/*" style="display:none" onchange="insertContextImage(this, ${q.id})">
        </div>
        <div class="ctx-editor" id="ctx-editor-${q.id}" contenteditable="true" data-placeholder="Digite o enunciado..."
          oninput="onContextEditorInput(this, ${q.id})"
          onpaste="handleContextPaste(event, ${q.id})"
          onmouseup="saveContextSelection(${q.id})"
          onkeyup="saveContextSelection(${q.id})"
          onfocus="saveContextSelection(${q.id})">${contextToHtml(q.context)}</div>
        <div class="items-section">
          <label class="field-label" style="margin-top:10px;">Itens da questão</label>
          ${q.items.map((item, ii) => `
            <div class="item-row">
              <span class="item-badge">${getItemLabel(ii, true)}</span>
              <textarea rows="1" placeholder="Texto do item ${getItemLabel(ii, true)}" oninput="onItemTextareaInput(this, ${q.id}, ${ii})">${escHtml(item)}</textarea>
              <button type="button" class="btn-rm-item" title="Remover item ${getItemLabel(ii, true)}" onclick="removeItem(${q.id}, ${ii})">×</button>
            </div>
          `).join('')}
          <button type="button" class="btn-add-item" onclick="addItem(${q.id})">+ Adicionar item</button>
        </div>
      </div>
    </div>
  `).join('');
  resizeItemTextareas();
  setupContextImageEditors();
}

/* ── Read header info fields ── */
function getHeaderInfo() {
  const v = (id) => document.getElementById(id)?.value || '';
  const rawDate = v('hi-data');
  let dateStr = '';
  if (rawDate) {
    const [y, m, d] = rawDate.split('-');
    dateStr = `${d}/${m}/${y}`;
  }
  return {
    nome:       v('hi-nome'),
    matricula:  v('hi-matricula'),
    disciplina: v('hi-disciplina'),
    prof:       v('hi-prof'),
    unid:       v('hi-unid'),
    tur:        v('hi-tur'),
    data:       dateStr,
  };
}

function formatStudentLabel(hi) {
  const nome = (hi?.nome || '').trim();
  const matricula = (hi?.matricula || '').trim();
  if (nome && matricula) return `${nome} - Matrícula: ${matricula}`;
  if (nome) return nome;
  if (matricula) return `Matrícula: ${matricula}`;
  return '';
}

function parseStudentsList() {
  const raw = document.getElementById('students-list')?.value || '';
  return raw.split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const parts = line.split(/\s*(?:;|\t|,|\s+-\s+)\s*/).filter(Boolean);
      if (parts.length === 1) return { nome: parts[0], matricula: '' };
      return { nome: parts[0], matricula: parts.slice(1).join(' ') };
    });
}

function updateStudentFieldLocks() {
  const studentsCount = parseStudentsList().length;
  const hasStudents = studentsCount > 0;
  ['hi-nome', 'hi-matricula'].forEach(id => {
    const field = document.getElementById(id);
    if (field) field.disabled = hasStudents;
  });

  const countEl = document.getElementById('students-count');
  if (countEl) {
    countEl.textContent = studentsCount === 1 ? '1 aluno na lista' : `${studentsCount} alunos na lista`;
  }

  const studentsBtn = document.getElementById('btn-pdf-students');
  if (studentsBtn && !studentsBtn.disabled) {
    studentsBtn.textContent = studentsCount
      ? `⬇ Provas dos alunos (${studentsCount})`
      : '⬇ Provas dos alunos';
  }
}

function onStudentsListChange() {
  updateStudentFieldLocks();
  renderPreview();
}

/* ── Build page HTML (shared between preview and PDF) ── */
function buildPageHTML(q, qi, total, headerLabel, isPreview, hi) {
  const contextHtml = contextToHtml(q.context);
  const parasHtml = contextHtml.trim()
    ? contextHtml
    : (isPreview ? '<p style="color:#000;font-style:italic;">Nenhum contexto inserido.</p>' : '');

  const itemsHtml = q.items.map((item, ii) =>
    `<div class="q-item"><span class="q-item-label">${getItemLabel(ii)})</span> ${escHtml(item)}</div>`
  ).join('');

  const answerAreaHtml = buildAnswerAreaHTML(q.items.length);

  const idBoxStyle = 'border:0.75px solid #000;border-radius:3px;padding:5px 10px;font-size:11pt;color:#000;line-height:1.4;min-height:28px;';
  const studentLabel = formatStudentLabel(hi);
  const headerHtml = qi === 0 ? `
    <div class="doc-top">
      ${WYDEN_SVG}
      <span class="doc-header-title">${escHtml(headerLabel)}</span>
    </div>
    <div class="id-fields">
      <div class="id-row">
        <span class="id-box" style="flex:2;${idBoxStyle}">Nome: <span style="font-weight:400;">${escHtml(hi.nome)}</span></span>
        <span class="id-box" style="flex:1;${idBoxStyle}">Matrícula: <span style="font-weight:400;">${escHtml(hi.matricula)}</span></span>
      </div>
      <div class="id-row">
        <span class="id-box" style="flex:2;${idBoxStyle}">Disciplina: <span style="font-weight:400;">${escHtml(hi.disciplina)}</span></span>
        <span class="id-box" style="flex:1;${idBoxStyle}">Prof.: <span style="font-weight:400;">${escHtml(hi.prof)}</span></span>
      </div>
      <div class="id-row">
        <span class="id-box" style="flex:1.2;${idBoxStyle}">Unid.: <span style="font-weight:400;">${escHtml(hi.unid)}</span></span>
        <span class="id-box" style="flex:0.8;${idBoxStyle}">Tur.: <span style="font-weight:400;">${escHtml(hi.tur)}</span></span>
        <span class="id-box" style="flex:0.8;${idBoxStyle}">Data: <span style="font-weight:400;">${escHtml(hi.data)}</span></span>
      </div>
    </div>
  ` : '';

  return `
    ${headerHtml}
    <div class="q-bar">${escHtml(q.title)}</div>
    <div class="q-context" data-q-id="${q.id}">${parasHtml}</div>
    <div class="q-items">${itemsHtml}</div>
    <div class="answer-area">${answerAreaHtml}</div>
    ${isPreview ? `
    <div class="doc-footer">
      <div class="footer-line"></div>
      <div class="footer-text">
        <span>${escHtml(studentLabel)}</span>
        <span>Página <strong>${qi + 1}</strong> de ${total}</span>
      </div>
    </div>` : ''}
  `;
}

/* ── Render preview ── */
function renderPreview() {
  const headerLabel = document.getElementById('input-header').value;
  const total = questions.length;
  const hi = getHeaderInfo();
  const container = document.getElementById('pages-container');
  container.style.cssText = 'display:flex;flex-direction:column;gap:28px;align-items:center;';

  container.innerHTML = questions.map((q, qi) =>
    `<div class="page-a4" id="preview-page-${qi}">${buildPageHTML(q, qi, total, headerLabel, true, hi)}</div>`
  ).join('');
  setupPreviewImageEditors();
}

/* ════════════════════════════════════════════════════════
   GERAR PDF — renderiza o mesmo DOM do preview:
   caixas/linhas vetoriais, texto real e imagens isoladas.
   A página inteira nunca é convertida em imagem.
════════════════════════════════════════════════════════ */
async function gerarPDF(exportOptions = {}) {
  const btn = exportOptions.button || document.getElementById('btn-pdf');
  const btnOriginalText = btn.textContent;
  const allPdfButtons = [...document.querySelectorAll('.pdf-btn')];
  btn.textContent = '⏳ Gerando...';
  allPdfButtons.forEach(button => button.disabled = true);

  try {
    const { jsPDF } = window.jspdf;
    {
    const headerLabel = document.getElementById('input-header').value;
    const baseHi = getHeaderInfo();
    const copies = exportOptions.copies || [baseHi];
    const filename = exportOptions.filename || 'prova-enade.pdf';

    const exportRoot = document.createElement('div');
    exportRoot.style.cssText = 'position:absolute;left:-100000px;top:0;display:flex;flex-direction:column;gap:0;align-items:center;background:#fff;';
    exportRoot.innerHTML = copies.map((copyHi, copyIndex) => {
      const hi = { ...baseHi, ...copyHi };
      const studentLabel = escHtml(formatStudentLabel(hi));
      return questions.map((q, qi) =>
        `<div class="page-a4" data-copy-index="${copyIndex}" data-student-label="${studentLabel}" id="export-page-${copyIndex}-${qi}">${buildPageHTML(q, qi, questions.length, headerLabel, false, hi)}</div>`
      ).join('');
    }).join('');
    document.body.appendChild(exportRoot);

    if (document.fonts?.ready) await document.fonts.ready;

    const PAGE_W = 210;
    const PAGE_H = 297;
    const CONTINUATION_TOP_MM = 11;
    const PAGE_BOTTOM_SAFE_MM = 18;
    const FOOTER_Y_MM = 283;
    const SIDE_MARGIN_MM = 10;
    const PDF_EPS_MM = 0.2;
    const previewPages = [...exportRoot.querySelectorAll('.page-a4')];
    if (!previewPages.length) throw new Error('Nenhuma página encontrada no preview.');

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const imageCache = new WeakMap();
    const px = (value) => Number.parseFloat(value) || 0;
    const toPt = (pxValue) => pxValue * 0.75;
    const rgba = (value) => {
      const match = String(value || '').match(/rgba?\(([^)]+)\)/i);
      if (!match) return null;
      const parts = match[1].split(',').map(part => Number.parseFloat(part));
      const alpha = parts.length > 3 ? parts[3] : 1;
      if (alpha === 0 || parts.slice(0, 3).some(Number.isNaN)) return null;
      return { r: parts[0], g: parts[1], b: parts[2], a: alpha };
    };
    const setColor = (setter, color) => {
      if (color) setter.call(pdf, color.r, color.g, color.b);
    };
    const isVisible = (el) => {
      const style = getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0;
    };

    function shouldSkipPdfElement(el) {
      return el.closest?.('.doc-footer');
    }

    function coords(rect, rootRect, scale, yOffsetPx, yShiftMm = 0) {
      return {
        x: (rect.left - rootRect.left) * scale,
        y: (rect.top - rootRect.top - yOffsetPx) * scale + yShiftMm,
        w: rect.width * scale,
        h: rect.height * scale,
      };
    }

    function fontStyle(style) {
      const weight = Number.parseInt(style.fontWeight, 10);
      const bold = style.fontWeight === 'bold' || weight >= 600;
      const italic = style.fontStyle === 'italic' || style.fontStyle === 'oblique';
      if (bold && italic) return 'bolditalic';
      if (bold) return 'bold';
      if (italic) return 'italic';
      return 'normal';
    }

    function hasUnderline(el) {
      let node = el;
      while (node && node.nodeType === Node.ELEMENT_NODE && !node.classList?.contains('page-a4')) {
        const decoration = getComputedStyle(node).textDecorationLine || '';
        if (decoration.includes('underline')) return true;
        node = node.parentElement;
      }
      return false;
    }

    function drawBorderLine(x1, y1, x2, y2, color, width) {
      if (!color || width <= 0) return;
      setColor(pdf.setDrawColor, color);
      pdf.setLineWidth(width);
      pdf.line(x1, y1, x2, y2);
    }

    function drawBox(el, rootRect, scale, yOffsetPx, yShiftMm, contentBottomMm) {
      if (!isVisible(el) || shouldSkipPdfElement(el)) return;
      if (el.classList?.contains('page-a4')) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const style = getComputedStyle(el);
      const pos = coords(rect, rootRect, scale, yOffsetPx, yShiftMm);
      const visibleTop = Math.max(pos.y, yShiftMm);
      const visibleBottom = Math.min(pos.y + pos.h, contentBottomMm);
      if (visibleBottom <= visibleTop) return;

      const bg = rgba(style.backgroundColor);
      const radius = px(style.borderTopLeftRadius) * scale;

      if (bg) {
        setColor(pdf.setFillColor, bg);
        if (pos.y >= yShiftMm && pos.y + pos.h <= contentBottomMm && radius > 0 && typeof pdf.roundedRect === 'function') {
          pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, radius, radius, 'F');
        } else {
          pdf.rect(pos.x, visibleTop, pos.w, visibleBottom - visibleTop, 'F');
        }
      }

      const topW = px(style.borderTopWidth) * scale;
      const rightW = px(style.borderRightWidth) * scale;
      const bottomW = px(style.borderBottomWidth) * scale;
      const leftW = px(style.borderLeftWidth) * scale;
      const topColor = rgba(style.borderTopColor);
      const rightColor = rgba(style.borderRightColor);
      const bottomColor = rgba(style.borderBottomColor);
      const leftColor = rgba(style.borderLeftColor);

      if (style.borderTopStyle !== 'none' && pos.y >= yShiftMm - PDF_EPS_MM && pos.y <= contentBottomMm + PDF_EPS_MM) {
        const y = Math.max(yShiftMm, Math.min(pos.y, contentBottomMm));
        drawBorderLine(pos.x, y, pos.x + pos.w, y, topColor, topW);
      }
      if (style.borderRightStyle !== 'none') {
        drawBorderLine(pos.x + pos.w, visibleTop, pos.x + pos.w, visibleBottom, rightColor, rightW);
      }
      if (style.borderBottomStyle !== 'none' && pos.y + pos.h >= yShiftMm - PDF_EPS_MM && pos.y + pos.h <= contentBottomMm + PDF_EPS_MM) {
        const y = Math.max(yShiftMm, Math.min(pos.y + pos.h, contentBottomMm));
        drawBorderLine(pos.x, y, pos.x + pos.w, y, bottomColor, bottomW);
      }
      if (style.borderLeftStyle !== 'none') {
        drawBorderLine(pos.x, visibleTop, pos.x, visibleBottom, leftColor, leftW);
      }
      if (el.classList?.contains('answer-area') && pos.y < yShiftMm && pos.y + pos.h > yShiftMm) {
        drawBorderLine(pos.x, yShiftMm, pos.x + pos.w, yShiftMm, topColor || bottomColor || leftColor, Math.max(topW, bottomW, 0.2));
      }
    }

    function svgToPng(svgEl) {
      if (imageCache.has(svgEl)) return imageCache.get(svgEl);
      const promise = new Promise((resolve, reject) => {
        const rect = svgEl.getBoundingClientRect();
        const clone = svgEl.cloneNode(true);
        clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        clone.setAttribute('width', Math.max(1, Math.ceil(rect.width * 2)));
        clone.setAttribute('height', Math.max(1, Math.ceil(rect.height * 2)));

        const svgText = new XMLSerializer().serializeToString(clone);
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.ceil(rect.width * 2));
          canvas.height = Math.max(1, Math.ceil(rect.height * 2));
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = reject;
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgText);
      });
      imageCache.set(svgEl, promise);
      return promise;
    }

    function blobToDataUrl(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }

    function makeImagePlaceholder(width = 420, height = 120) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, width - 2, height - 2);
      ctx.fillStyle = '#000';
      ctx.font = '16px Arial';
      ctx.fillText('Imagem externa bloqueada no PDF', 18, 48);
      ctx.font = '13px Arial';
      ctx.fillText('Reinsira a imagem pelo botao Img para embutir no arquivo.', 18, 74);
      return canvas.toDataURL('image/png');
    }

    function normalizeRasterImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth || img.width || 1;
            canvas.height = img.naturalHeight || img.height || 1;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/jpeg', 0.92));
          } catch (err) {
            reject(err);
          }
        };
        img.onerror = reject;
        img.src = src;
      });
    }

    async function imgToDataUrl(imgEl) {
      if (imageCache.has(imgEl)) return imageCache.get(imgEl);
      const promise = (async () => {
        const src = imgEl.currentSrc || imgEl.src || '';
        if (src.startsWith('data:image/')) {
          try {
            return await normalizeRasterImage(src);
          } catch (err) {
            console.warn('Nao foi possivel normalizar imagem embutida:', err);
            return src;
          }
        }

        try {
          const response = await fetch(src);
          if (!response.ok) throw new Error('Imagem externa indisponivel.');
          const blob = await response.blob();
          if (!blob.type.startsWith('image/')) throw new Error('Arquivo externo nao e imagem.');
          return await normalizeRasterImage(await blobToDataUrl(blob));
        } catch (fetchErr) {
          console.warn('Nao foi possivel embutir imagem externa no PDF:', fetchErr);
        }

        return await new Promise((resolve) => {
        const finish = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = imgEl.naturalWidth || imgEl.width || 1;
            canvas.height = imgEl.naturalHeight || imgEl.height || 1;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgEl, 0, 0);
            resolve(canvas.toDataURL('image/jpeg', 0.92));
          } catch (err) {
            console.warn('Canvas bloqueado para imagem externa:', err);
            resolve(makeImagePlaceholder());
          }
        };
        if (imgEl.complete) finish();
        else {
          imgEl.onload = finish;
          imgEl.onerror = () => resolve(makeImagePlaceholder());
        }
      });
      })();
      imageCache.set(imgEl, promise);
      return promise;
    }

    async function drawImageElement(el, rootRect, scale, yOffsetPx, yShiftMm, contentBottomMm) {
      if (!isVisible(el) || shouldSkipPdfElement(el)) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const pos = coords(rect, rootRect, scale, yOffsetPx, yShiftMm);
      if (pos.y >= contentBottomMm || pos.y + pos.h <= yShiftMm) return;

      const dataUrl = el.tagName.toLowerCase() === 'svg'
        ? await svgToPng(el)
        : await imgToDataUrl(el);
      const format = dataUrl.startsWith('data:image/jpeg') || dataUrl.startsWith('data:image/jpg')
        ? 'JPEG'
        : 'PNG';
      try {
        pdf.addImage(dataUrl, format, pos.x, pos.y, pos.w, pos.h);
      } catch (err) {
        console.warn('Falha ao inserir imagem no PDF; usando marcador:', err);
        pdf.addImage(makeImagePlaceholder(), 'PNG', pos.x, pos.y, pos.w, pos.h);
      }
    }

    function drawTextNode(node, rootRect, scale, yOffsetPx, yShiftMm, contentBottomMm) {
      if (!node.nodeValue || !node.nodeValue.trim()) return;
      const parent = node.parentElement;
      if (!parent || parent.closest('svg') || !isVisible(parent) || shouldSkipPdfElement(parent)) return;

      const style = getComputedStyle(parent);
      const color = rgba(style.color);
      if (!color) return;
      const underline = hasUnderline(parent);

      pdf.setFont('helvetica', fontStyle(style));
      pdf.setFontSize(toPt(px(style.fontSize)));
      setColor(pdf.setTextColor, color);

      const text = node.nodeValue;
      const range = document.createRange();
      let run = null;
      const underlineLines = [];
      const addUnderlineSegment = (x1, x2, y) => {
        const existing = underlineLines.find(line => Math.abs(line.y - y) < 0.7 && x1 <= line.x2 + 2 && x2 >= line.x1 - 2);
        if (existing) {
          existing.x1 = Math.min(existing.x1, x1);
          existing.x2 = Math.max(existing.x2, x2);
        } else {
          underlineLines.push({ x1, x2, y });
        }
      };
      const flush = () => {
        if (!run || !run.text) return;
        const x = (run.left - rootRect.left) * scale;
        const baseline = (run.top - rootRect.top - yOffsetPx + px(style.fontSize) * 0.78) * scale + yShiftMm;
        if (baseline < yShiftMm || baseline > contentBottomMm) {
          run = null;
          return;
        }
        pdf.text(run.text, x, baseline, { baseline: 'alphabetic' });
        if (underline) {
          const underlineY = baseline + 0.8;
          addUnderlineSegment(x, x + pdf.getTextWidth(run.text), underlineY);
        }
        run = null;
      };

      for (let i = 0; i < text.length; i++) {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const rect = range.getClientRects()[0];
        const ch = text[i];
        if (!rect || /\s/.test(ch)) {
          if (run && /\s/.test(ch)) {
            const sameLine = Math.abs(run.top - rect.top) < 1.5;
            if (sameLine) run.text += ch;
            else flush();
          } else {
            flush();
          }
          continue;
        }

        const sameLine = run && Math.abs(run.top - rect.top) < 1.5;
        if (!sameLine) flush();
        if (!run) run = { text: '', left: rect.left, top: rect.top };
        run.text += ch;
      }
      flush();
      if (underline && underlineLines.length) {
        setColor(pdf.setDrawColor, color);
        pdf.setLineWidth(0.18);
        underlineLines.forEach(line => pdf.line(line.x1, line.y, line.x2, line.y));
      }
      range.detach();
    }

    async function renderPdfPage(root, yOffsetPx, yShiftMm, contentBottomMm) {
      const rootRect = root.getBoundingClientRect();
      const scale = PAGE_W / rootRect.width;

      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, PAGE_W, PAGE_H, 'F');

      [root, ...root.querySelectorAll('*')].forEach(el => drawBox(el, rootRect, scale, yOffsetPx, yShiftMm, contentBottomMm));

      for (const el of root.querySelectorAll('svg,img')) {
        await drawImageElement(el, rootRect, scale, yOffsetPx, yShiftMm, contentBottomMm);
      }

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) drawTextNode(walker.currentNode, rootRect, scale, yOffsetPx, yShiftMm, contentBottomMm);
    }

    function drawPdfFooter(pageNum, totalPages, studentLabel = '') {
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.35);
      pdf.line(SIDE_MARGIN_MM, FOOTER_Y_MM, PAGE_W - SIDE_MARGIN_MM, FOOTER_Y_MM);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      pdf.setTextColor(0, 0, 0);
      if (studentLabel) {
        const maxStudentW = 120;
        const studentText = pdf.splitTextToSize(studentLabel, maxStudentW)[0];
        pdf.text(studentText, SIDE_MARGIN_MM, FOOTER_Y_MM + 5);
      }
      const prefix = 'Página ';
      const current = String(pageNum);
      const suffix = ` de ${totalPages}`;
      const full = prefix + current + suffix;
      const x = PAGE_W - SIDE_MARGIN_MM - pdf.getTextWidth(full);
      const y = FOOTER_Y_MM + 5;
      pdf.text(prefix, x, y);
      pdf.setFont('helvetica', 'bold');
      pdf.text(current, x + pdf.getTextWidth(prefix), y);
      pdf.setFont('helvetica', 'normal');
      pdf.text(suffix, x + pdf.getTextWidth(prefix + current), y);
    }

    function getVisibleContentBottomPx(root) {
      const rootTop = root.getBoundingClientRect().top;
      return [...root.querySelectorAll('*')].reduce((bottomPx, el) => {
        if (!isVisible(el) || shouldSkipPdfElement(el)) return bottomPx;
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return bottomPx;
        return Math.max(bottomPx, rect.bottom - rootTop);
      }, 0);
    }

    function hasVisibleContentInSlice(root, startPx, endPx) {
      const rootTop = root.getBoundingClientRect().top;
      return [...root.querySelectorAll('*')].some(el => {
        if (!isVisible(el) || shouldSkipPdfElement(el)) return false;
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return false;
        const top = rect.top - rootTop;
        const bottom = rect.bottom - rootTop;
        return bottom > startPx + 1 && top < endPx - 1;
      });
    }

    function getKeepTogetherIntervals(root) {
      const rootTop = root.getBoundingClientRect().top;
      const intervals = [];
      const addInterval = (top, bottom) => {
        if (bottom - top > 0.5) intervals.push({ top, bottom });
      };

      root.querySelectorAll('.answer-line, .q-bar, .id-box').forEach(el => {
        if (!isVisible(el) || shouldSkipPdfElement(el)) return;
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        addInterval(rect.top - rootTop, rect.bottom - rootTop);
      });

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.nodeValue || !node.nodeValue.trim()) continue;
        const parent = node.parentElement;
        if (!parent || parent.closest('svg') || !isVisible(parent) || shouldSkipPdfElement(parent)) continue;

        const range = document.createRange();
        range.selectNodeContents(node);
        [...range.getClientRects()].forEach(rect => {
          if (!rect.width || !rect.height) return;
          addInterval(rect.top - rootTop, rect.bottom - rootTop);
        });
        range.detach();
      }

      return intervals
        .sort((a, b) => a.top - b.top || a.bottom - b.bottom)
        .reduce((merged, interval) => {
          const last = merged[merged.length - 1];
          if (last && interval.top < last.bottom - 0.25) {
            last.bottom = Math.max(last.bottom, interval.bottom);
          } else {
            merged.push({ ...interval });
          }
          return merged;
        }, []);
    }

    function snapSliceEndToLineBoundary(intervals, sliceStart, idealEnd) {
      const minProgress = 20;
      let end = idealEnd;

      for (const interval of intervals) {
        const cutsLine = interval.top < end - 0.5 && interval.bottom > end + 0.5;
        if (!cutsLine) continue;

        const beforeLine = interval.top;
        if (beforeLine > sliceStart + minProgress) end = beforeLine;
        break;
      }

      return end;
    }

    const renderJobs = [];
    for (const root of previewPages) {
      const rootRect = root.getBoundingClientRect();
      const scale = PAGE_W / rootRect.width;
      const contentBottomPx = getVisibleContentBottomPx(root);
      const keepTogetherIntervals = getKeepTogetherIntervals(root);
      let sliceStart = 0;
      let slice = 0;

      while (sliceStart < contentBottomPx - 1 || slice === 0) {
        const yShiftMm = slice === 0 ? 0 : CONTINUATION_TOP_MM;
        const contentBottomMm = PAGE_H - PAGE_BOTTOM_SAFE_MM;
        const sliceHeightPx = (contentBottomMm - yShiftMm) / scale;
        let sliceEnd = snapSliceEndToLineBoundary(keepTogetherIntervals, sliceStart, sliceStart + sliceHeightPx);
        if (slice > 0 && !hasVisibleContentInSlice(root, sliceStart, sliceEnd)) {
          sliceStart = sliceEnd;
          slice++;
          continue;
        }

        const actualContentBottomMm = yShiftMm + (sliceEnd - sliceStart) * scale;
        renderJobs.push({ root, sliceStart, yShiftMm, contentBottomMm: actualContentBottomMm, studentLabel: root.dataset.studentLabel || '' });
        sliceStart = sliceEnd;
        slice++;
      }
    }

    for (const [i, job] of renderJobs.entries()) {
      if (i > 0) pdf.addPage();
      await renderPdfPage(job.root, job.sliceStart, job.yShiftMm, job.contentBottomMm);
      drawPdfFooter(i + 1, renderJobs.length, job.studentLabel);
    }

    exportRoot.remove();
    pdf.save(filename);
    return;
    }

    const headerLabel = document.getElementById('input-header').value;
    const hi = getHeaderInfo();

    /* ── Constantes de layout ── */
    const PW = 210, PH = 297;          // página A4
    const ML = 10, MR = 10;            // margens esq/dir
    const MT = 11, MB = 14;            // margens top/bottom
    const CW = PW - ML - MR;           // largura do conteúdo (190mm)
    const LINE_H = 6.5;                // altura de cada linha de resposta (mm)
    const N_LINES = 22;                // número de linhas de resposta
    const BOX_H = 8;                   // altura das caixas de cabeçalho

    /* ── Helpers de texto com quebra automática ── */
    function wrappedText(pdf, text, x, maxW, fontSize, lineHeight) {
      pdf.setFontSize(fontSize);
      const lines = pdf.splitTextToSize(text, maxW);
      return { lines, height: lines.length * lineHeight };
    }

    function drawWrapped(pdf, lines, x, y, lineHeight) {
      lines.forEach((line, i) => pdf.text(line, x, y + i * lineHeight));
    }

    /* ── Desenha uma caixa de campo (label: valor) ── */
    function drawField(pdf, label, value, x, y, w, h) {
      pdf.setDrawColor(80, 80, 80);
      pdf.setLineWidth(0.3);
      pdf.rect(x, y, w, h);
      pdf.setFontSize(8);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'bold');
      pdf.text(label, x + 2, y + 5.2);
      if (value) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(0, 0, 0);
        const maxW = w - pdf.getTextWidth(label) - 4;
        const val = pdf.splitTextToSize(value, maxW)[0];
        pdf.text(val, x + 2 + pdf.getTextWidth(label) + 1, y + 5.2);
      }
    }

    /* ── Cabeçalho de campos de identificação ── */
    function drawIdFields(pdf, hi, y) {
      const h = BOX_H;
      const gap = 1;
      // Linha 1: Nome (2/3) | Matrícula (1/3)
      const w1a = CW * 2/3 - gap/2, w1b = CW * 1/3 - gap/2;
      drawField(pdf, 'Nome:', hi.nome, ML, y, w1a, h);
      drawField(pdf, 'Matrícula:', hi.matricula, ML + w1a + gap, y, w1b, h);
      y += h + gap;
      // Linha 2: Disciplina (2/3) | Prof. (1/3)
      drawField(pdf, 'Disciplina:', hi.disciplina, ML, y, w1a, h);
      drawField(pdf, 'Prof.:', hi.prof, ML + w1a + gap, y, w1b, h);
      y += h + gap;
      // Linha 3: Unid. | Tur. | Data
      const w3a = CW * 0.4, w3b = CW * 0.25 - gap, w3c = CW - w3a - w3b - gap*2;
      drawField(pdf, 'Unid.:', hi.unid, ML, y, w3a, h);
      drawField(pdf, 'Tur.:', hi.tur, ML + w3a + gap, y, w3b, h);
      drawField(pdf, 'Data:', hi.data, ML + w3a + w3b + gap*2, y, w3c, h);
      y += h;
      return y;
    }

    /* ── Barra "Questão N" ── */
    function drawQBar(pdf, title, y) {
      pdf.setFillColor(223, 223, 223);
      pdf.setDrawColor(223, 223, 223);
      pdf.roundedRect(ML, y, CW, 7, 1, 1, 'F');
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 0, 0);
      pdf.text(title, ML + 3, y + 5);
      return y + 7;
    }

    /* ── Logo "wyden" em texto (sem SVG) ── */
    function drawLogo(pdf, x, y) {
      pdf.setFontSize(22);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 0, 0);
      pdf.text('wyden', x, y + 7);
    }

    /* ── Rodapé: linha + numeração ── */
    function drawFooter(pdf, pageNum, totalPages) {
      const y = PH - MB + 2;
      pdf.setDrawColor(65, 65, 65);
      pdf.setLineWidth(0.4);
      pdf.line(ML, y, PW - MR, y);
      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);
      const txt = `Página ${pageNum} de ${totalPages}`;
      pdf.text(txt, PW - MR - pdf.getTextWidth(txt), y + 4);
    }

    /* ── Calcula total de páginas antes de desenhar ── */
    // Para isso, simula o layout de cada questão e conta páginas necessárias
    function calcPages(q) {
      const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
      const { pageCount } = simulateQuestion(pdf, q, '', {}, false);
      return pageCount;
    }

    function simulateQuestion(pdf, q, headerLabel, hi, draw) {
      // Retorna { pageCount, pages: [{yStart, yEnd}] }
      const LH_BODY = 5.2;   // line-height corpo de texto
      const LH_ITEM = 5.0;   // line-height itens
      const FS_BODY = 9.5;

      pdf.setFont('helvetica', 'normal');

      // Conteúdo fixo por página de questão
      // Cabeçalho (logo+título): ~12mm
      // ID fields (3 linhas × BOX_H + gaps): 3*8 + 2 = 26mm
      // QBar: 7mm + 4mm gap = 11mm
      // Rodapé: MB = 14mm reservado
      const FIXED_TOP = 12 + 26 + 2 + 11; // mm do topo até início do texto
      const USABLE_H = PH - MT - MB - FIXED_TOP; // espaço para texto + linhas

      // Mede o enunciado
      pdf.setFontSize(FS_BODY);
      const paras = q.context.split('\n\n').filter(p => p.trim());
      let totalTextH = 0;
      const paraLines = paras.map(para => {
        const lines = pdf.splitTextToSize(para, CW);
        totalTextH += lines.length * LH_BODY + 2.5; // +gap entre parágrafos
        return lines;
      });
      if (paras.length) totalTextH -= 2.5; // remove último gap

      // Mede os itens
      const itemLines = q.items.map((item, ii) => {
        const txt = `${getItemLabel(ii)}) ${item}`;
        return pdf.splitTextToSize(txt, CW);
      });
      let totalItemH = 0;
      itemLines.forEach(ls => totalItemH += ls.length * LH_ITEM + 1.5);

      const contentH = totalTextH + 4 + totalItemH + 4; // texto + margens internas
      const linesH = N_LINES * LINE_H;

      const totalContentH = contentH + linesH;

      // Quantas páginas são necessárias?
      // Primeira página: USABLE_H disponível
      // Páginas seguintes: PH - MT - MB
      const firstPageH = USABLE_H;
      const contPageH  = PH - MT - MB;

      let pages = 1;
      if (totalContentH > firstPageH) {
        const overflow = totalContentH - firstPageH;
        pages += Math.ceil(overflow / contPageH);
      }
      return { pageCount: pages, paraLines, itemLines, totalTextH, totalItemH, LH_BODY, LH_ITEM, FS_BODY };
    }

    /* ── Conta total de páginas ── */
    const pageCounts = questions.map(q => {
      const testPdf = new jsPDF({ unit: 'mm', format: 'a4' });
      return simulateQuestion(testPdf, q, headerLabel, hi, false).pageCount;
    });
    const totalPages = pageCounts.reduce((a, b) => a + b, 0);

    /* ── Desenha o PDF ── */
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    let globalPage = 0;

    questions.forEach((q, qi) => {
      if (qi > 0) pdf.addPage();
      globalPage++;

      const sim = simulateQuestion(pdf, q, headerLabel, hi, false);
      const { paraLines, itemLines, LH_BODY, LH_ITEM, FS_BODY } = sim;

      /* — Cabeçalho da página — */
      let y = MT;

      // Logo + título
      drawLogo(pdf, ML, y);
      pdf.setFontSize(13);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 0, 0);
      const titleW = pdf.getTextWidth(headerLabel);
      pdf.text(headerLabel, PW - MR - titleW, y + 7);
      y += 12;

      // Campos de identificação
      y = drawIdFields(pdf, hi, y);
      y += 2;

      // Barra da questão
      y = drawQBar(pdf, q.title, y);
      y += 4;

      /* — Enunciado — */
      pdf.setFontSize(FS_BODY);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);

      paraLines.forEach((lines, pi) => {
        // Verifica quebra de página
        const blockH = lines.length * LH_BODY;
        if (y + blockH > PH - MB) {
          drawFooter(pdf, globalPage, totalPages);
          pdf.addPage();
          globalPage++;
          y = MT;
        }
        pdf.setFontSize(FS_BODY);
        pdf.setFont('helvetica', 'normal');
        drawWrapped(pdf, lines, ML, y, LH_BODY);
        y += blockH + (pi < paraLines.length - 1 ? 2.5 : 0);
      });

      y += 4;

      /* — Itens — */
      itemLines.forEach((lines, ii) => {
        const blockH = lines.length * LH_ITEM;
        if (y + blockH > PH - MB) {
          drawFooter(pdf, globalPage, totalPages);
          pdf.addPage();
          globalPage++;
          y = MT;
        }
        pdf.setFontSize(FS_BODY);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(0, 0, 0);
        const fullText = `${getItemLabel(ii)}) ${q.items[ii]}`;
        const wrapped = pdf.splitTextToSize(fullText, CW);
        drawWrapped(pdf, wrapped, ML, y, LH_ITEM);
        y += blockH + 1.5;
      });

      y += 4;

      /* — Linhas de resposta — */
      const ITEM_COL_W = 12;
      const ANSWER_X = ML + ITEM_COL_W;
      const ANSWER_BORDER_W = 0.3;
      const ANSWER_DIVIDER_W = 0.36;
      const allocations = getAnswerLineAllocation(q.items.length);
      let isBoxStart = true; // controla se precisamos desenhar borda superior

      allocations.forEach((lineCount, ii) => {
        const itemBlockH = lineCount * LINE_H;
        for (let l = 0; l < lineCount; l++) {
          if (y + LINE_H > PH - MB) {
            pdf.setDrawColor(0, 0, 0);
            pdf.setLineWidth(ANSWER_BORDER_W);
            pdf.line(ML, y, ML + CW, y);
            drawFooter(pdf, globalPage, totalPages);
            pdf.addPage();
            globalPage++;
            y = MT;
            isBoxStart = true;
          }

          if (ii % 2 === 1) {
            pdf.setFillColor(242, 242, 242);
            pdf.rect(ML, y, CW, LINE_H, 'F');
          }

          if (isBoxStart) {
            pdf.setDrawColor(0, 0, 0);
            pdf.setLineWidth(ANSWER_BORDER_W);
            pdf.line(ML, y, ML + CW, y);
            isBoxStart = false;
          }

          pdf.setDrawColor(0, 0, 0);
          pdf.setLineWidth(ANSWER_BORDER_W);
          pdf.line(ML, y, ML, y + LINE_H);
          pdf.setLineWidth(ANSWER_DIVIDER_W);
          pdf.line(ANSWER_X, y, ANSWER_X, y + LINE_H);
          pdf.setLineWidth(ANSWER_BORDER_W);
          pdf.line(ML + CW, y, ML + CW, y + LINE_H);

          if (l === 0) {
            const label = getItemLabel(ii, true);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(9);
            pdf.setTextColor(0, 0, 0);
            pdf.text(label, ML + (ITEM_COL_W - pdf.getTextWidth(label)) / 2, y + itemBlockH / 2 + 1.5);
          }

          const isItemEnd = l === lineCount - 1;
          const x1 = isItemEnd ? ML : ANSWER_X;
          pdf.setDrawColor(0, 0, 0);
          pdf.setLineWidth(ANSWER_BORDER_W);
          pdf.line(x1, y + LINE_H, ML + CW, y + LINE_H);
          y += LINE_H;
        }
      });

      drawFooter(pdf, globalPage, totalPages);
    });

    pdf.save('prova-enade.pdf');
  } catch (err) {
    alert('Erro ao gerar PDF: ' + err.message);
    console.error(err);
  } finally {
    btn.textContent = btnOriginalText;
    allPdfButtons.forEach(button => button.disabled = false);
  }
}

function gerarPDFModelo() {
  const hi = getHeaderInfo();
  return gerarPDF({
    button: document.getElementById('btn-pdf'),
    filename: 'prova-enade-sem-dados.pdf',
    copies: [{ ...hi, nome: '', matricula: '' }],
  });
}

function gerarPDFAlunos() {
  const students = parseStudentsList();
  if (!students.length) {
    alert('Informe ao menos um aluno na lista. Use: Nome; Matrícula');
    return;
  }

  const baseHi = getHeaderInfo();
  return gerarPDF({
    button: document.getElementById('btn-pdf-students'),
    filename: 'provas-enade-alunos.pdf',
    copies: students.map(student => ({
      ...baseHi,
      nome: student.nome,
      matricula: student.matricula,
    })),
  });
}

function render() { renderEditor(); renderPreview(); updateStudentFieldLocks(); }
render();
