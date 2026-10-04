// زر إنشاء خطة الإخراج
document.getElementById('generateBriefBtn').addEventListener('click', function() {
const idea = document.getElementById('ideaInput').value;

if (!idea.trim()) {
alert('لطفاً أدخلي الفكرة أولاً لنتمكن من بناء خطة الإخراج!');
return;
}

const tone = document.getElementById('contentTone').value;
const shotsContainer = document.getElementById('shotsContainer');
shotsContainer.innerHTML = ''; // تفريغ القائمة القادمة

// توليد سيناريو لقطات ذكي وموجه
const sampleShots = [
{ title: "Shot 01: لقطة افتتاحية (Wide Shot)", duration: "5 ثوانٍ", desc: `افتتاحية بصرية دافئة تعبر عن: "${idea}". إضاءة طبيعية ونبرة ${tone}.` },
{ title: "Shot 02: لقطة متوسطة (Medium Shot)", duration: "4 ثوانٍ", desc: "تركيز على الشخصية/العنصر الأساسي أثناء القيام بنشاط تمكيني أو توعوي." },
{ title: "Shot 03: لقطة قريبة (Close-Up)", duration: "3 ثوانٍ", desc: "تفاصيل مركزة تعكس المشاعر والرسالة القوية للفكرة." }
];

sampleShots.forEach(shot => {
const div = document.createElement('div');
div.className = 'shot-card';
div.innerHTML = `
<div>
<div class="shot-title">${shot.title} <small>(${shot.duration})</small></div>
<div style="font-size: 0.85rem; color: #cbd5e1; margin-top: 4px;">${shot.desc}</div>
</div>
<span class="status-badge available">جاهز للتنفيذ</span>
`;
shotsContainer.appendChild(div);
});

document.getElementById('shotsSection').classList.remove('hidden');
document.getElementById('shotsSection').scrollIntoView({ behavior: 'smooth' });
});

// التنقل بين تبويبات الأستوديو اليدوي
function switchTab(tabId) {
document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

event.currentTarget.classList.add('active');
document.getElementById('tab-' + tabId).classList.add('active');
}
