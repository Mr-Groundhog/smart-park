const roleData = {
  group: {
    name: '集团管理方', short: '集团', org: '集团全域', orgs: ['集团全域', '华东分公司', '华南分公司', '华北分公司'],
    context: '集团全域 · 运营驾驶舱', eyebrow: 'GROUP OPERATIONS · 经营总览', title: '集团经营运行总览',
    description: '纵观经营指标与资产运营，及时识别下属单位变化与重大风险。',
    permission: '当前为集团级视角，可查看集团汇总及授权范围内的分公司、园区数据。',
    metrics: [
      { label: '运营收入', value: '2.86亿元', change: '+8.6%', detail: '较上期', icon: '¥', tone: 'blue', spark: '3,12 12,8 21,10 30,5 40,8 52,2' },
      { label: '资产出租率', value: '91.3%', change: '+1.2%', detail: '较上期', icon: '▤', tone: 'green', spark: '2,13 12,10 22,11 31,7 41,6 52,2' },
      { label: '重点任务按期率', value: '96.4%', change: '+3.8%', detail: '较上期', icon: '✓', tone: 'purple', spark: '2,12 11,13 21,8 31,9 41,4 52,3' },
      { label: '风险整改率', value: '98.2%', change: '2项', detail: '重大预警待督办', icon: '!', tone: 'orange', spark: '2,14 12,10 22,11 31,7 41,4 52,5' }
    ],
    performance: { title: '分公司经营表现', subtitle: '各单位经营目标完成情况 · 单位：完成率', summary: [['本期平均', '89.6%', '+4.2%'], ['领先单位', '华东分公司', '达成率 96%'], ['待关注', '华南分公司', '低于目标 3.4%']], chart: [['华东', 94], ['华南', 72], ['华北', 81], ['华中', 87], ['西部', 96]], footnote: '经营目标完成率' },
    focus: { title: '集团重点督办', subtitle: '需集团关注或推动的事项', stats: [['待督办', '12', 'normal'], ['临近到期', '3', 'warn'], ['重大风险', '2', 'danger']], list: [['安全专项检查整改报告', '华北分公司 · 今日 18:00', '高优先', 'high'], ['闲置资产盘活方案', '华南分公司 · 10月22日', '待推动', ''], ['年度预算执行偏差说明', '华东分公司 · 10月23日', '关注', '']] },
    tasks: [['二季度预算执行情况复核', '华东分公司', '今天 16:00', '高', '待审核'], ['安全专项检查整改报告', '华北分公司', '今天 18:00', '高', '处理中'], ['闲置资产盘活方案', '华南分公司', '明天 12:00', '普通', '待阅'], ['集团党建工作月度报表', '集团总部', '10月23日', '普通', '待提交']],
    assistant: '本期集团经营收入较上期<strong>增长 8.6%</strong>，华东、西部单位完成情况领先。华南分公司资产出租率低于集团均值，建议优先跟进<strong>闲置资产盘活方案</strong>。另有 2 项重大安全事项尚待督办。',
    notices: [['经营', '集团三季度经营分析会通知', '10-20', ''], ['安全', '关于开展园区消防专项检查的通知', '10-19', 'orange'], ['党建', '党建工作月度报表填报提醒', '10-18', 'green']],
    apps: [['经营分析', '析', '#347fe0'], ['单位对标', '比', '#17a5a3'], ['国有资产', '资', '#f29a43'], ['流程审批', '审', '#e35f77'], ['党建工作', '党', '#39aa77'], ['数字大屏', '屏', '#7869dd'], ['安全总览', '安', '#3981d8'] ],
    reminders: [['预算执行复核今日 16:00 截止', 'red'], ['运营分析会 14:30 开始', 'blue'], ['消防整改进展待确认', '']]
  },
  park: {
    name: '园区管理方', short: '园区', org: '科创园区', orgs: ['科创园区', '科创园区 · 东区', '科创园区 · 西区'],
    context: '科创园区 · 园区运营中心', eyebrow: 'CAMPUS OPERATIONS · 园区运营', title: '科创园区运营工作台',
    description: '聚焦园区运行、企业服务与公共资源，让诉求响应和跨部门协同有序闭环。',
    permission: '当前为园区级视角，可查看本园区运营、企业服务和物业履约摘要；其他园区及物业内部敏感数据不可见。',
    metrics: [
      { label: '入园企业', value: '326家', change: '+12家', detail: '本季度新增', icon: '企', tone: 'blue', spark: '2,14 12,10 22,11 32,7 42,5 52,2' },
      { label: '企业服务满意度', value: '96.8%', change: '+2.1%', detail: '较上期', icon: '♡', tone: 'green', spark: '2,12 12,13 22,8 32,8 42,4 52,3' },
      { label: '公共服务订单', value: '1,248', change: '+11.6%', detail: '本月累计', icon: '▦', tone: 'purple', spark: '2,14 12,11 22,10 32,7 42,8 52,2' },
      { label: '本月综合能耗', value: '42.1万', change: '-4.3%', detail: 'kWh · 较上期', icon: '⚡', tone: 'orange', spark: '2,3 12,7 22,6 32,10 42,8 52,13' }
    ],
    performance: { title: '园区公共服务运营', subtitle: '本月服务使用趋势 · 预约 / 订单量', summary: [['服务响应', '12分钟', '平均用时'], ['本月服务', '4,862次', '+9.2%'], ['资源利用率', '82.7%', '+3.6%']], chart: [['停车', 86], ['会议', 63], ['访客', 75], ['餐饮', 92], ['场地', 57]], footnote: '使用量指数' },
    focus: { title: '企业服务与协同', subtitle: '园区当前需要跟进的事项', stats: [['处理中', '18', 'normal'], ['待协同', '3', 'warn'], ['已超时', '1', 'danger']], list: [['A区会议室照明报修', '企业服务 · 今日 11:30', '待物业', ''], ['宿舍 3 号楼热水故障', '宿舍管理 · 今日 12:00', '待协同', 'high'], ['停车月卡续费咨询', '公共服务 · 今日 15:00', '处理中', '']] },
    tasks: [['企业服务工单处理与回访', '科创园区 · 客服中心', '今天 12:00', '高', '处理中'], ['宿舍 3 号楼消防检查', '科创园区 · 宿舍管理', '今天 16:30', '高', '待执行'], ['公共会议室服务复盘', '科创园区 · 运营部', '明天 10:00', '普通', '待审核'], ['园区节能改造项目进度确认', '科创园区 · 工程部', '10月22日', '普通', '待协同']],
    assistant: '今日企业服务请求共 <strong>28 项</strong>，平均响应 12 分钟，服务满意度保持在 96.8%。宿舍 3 号楼有 1 项设施故障待园区协调；本周会议室预约较上周增加<strong> 14%</strong>，建议关注晚间时段资源配置。',
    notices: [['园区', '科创园区本周企业服务安排', '10-20', ''], ['服务', '会议中心预约规则调整说明', '10-19', 'green'], ['安全', '宿舍区消防演练时间安排', '10-18', 'orange']],
    apps: [['企业服务', '企', '#347fe0'], ['公共运营', '服', '#18a78f'], ['资产空间', '资', '#f29a43'], ['宿舍管理', '宿', '#7a72dc'], ['智慧物业', '物', '#3c88da'], ['流程审批', '审', '#df6675'], ['统一支付', '付', '#28a17d'], ['党建工作', '党', '#c26c7b']],
    reminders: [['企业服务回访今日 12:00 前完成', 'red'], ['园区消防演练 15:00 开始', 'blue'], ['会议中心活动预约待确认', '']]
  },
  property: {
    name: '物业管理方', short: '物业', org: '科创园物业项目', orgs: ['科创园物业项目', '科创园 · 东区项目', '科创园 · 西区项目'],
    context: '科创园物业项目 · 项目服务中心', eyebrow: 'PROPERTY SERVICES · 现场履约', title: '物业项目服务工作台',
    description: '一屏掌握待办工单、设备巡检与现场告警，及时安排班组完成服务闭环。',
    permission: '当前仅显示已授权物业项目及服务范围内的工单、设备和班组信息；园区经营与集团数据不可见。',
    metrics: [
      { label: '今日工单', value: '128单', change: '18单', detail: '待接单', icon: '单', tone: 'blue', spark: '2,12 12,8 22,10 32,4 42,8 52,3' },
      { label: '按期办结率', value: '95.6%', change: '+1.8%', detail: '较上周', icon: '✓', tone: 'green', spark: '2,14 12,11 22,8 32,10 42,5 52,2' },
      { label: '设备在线率', value: '99.2%', change: '2项', detail: '设备告警', icon: '⚙', tone: 'purple', spark: '2,10 12,7 22,8 32,5 42,6 52,3' },
      { label: '待巡检点位', value: '14处', change: '3处', detail: '临近超时', icon: '⌖', tone: 'orange', spark: '2,3 12,7 22,4 32,9 42,8 52,13' }
    ],
    performance: { title: '本周工单处理趋势', subtitle: '物业项目日处理完成量 · 单位：单', summary: [['本周办结', '462单', '+7.4%'], ['平均响应', '18分钟', '较上周 −3分'], ['一次修复率', '91.2%', '+2.6%']], chart: [['周一', 64], ['周二', 81], ['周三', 72], ['周四', 92], ['周五', 84]], footnote: '日办结工单' },
    focus: { title: '物业现场待办', subtitle: '优先处理现场任务与异常', stats: [['待接单', '18', 'normal'], ['超时工单', '3', 'danger'], ['设备告警', '2', 'warn']], list: [['研发楼 2F 空调温度异常', '工程维修 · 设备告警', '立即处理', 'high'], ['B区电梯月度巡检', '工程班组 · 11:30 前', '临近超时', ''], ['地下车库照明故障复核', '维修工单 · 今日 13:00', '待复核', '']] },
    tasks: [['研发楼 2F 空调温度异常处理', '科创园物业 · 工程班', '立即处理', '高', '待接单'], ['B区电梯月度维保巡检', '科创园物业 · 工程班', '今天 11:30', '高', '处理中'], ['地下车库照明故障复核', '科创园物业 · 工程班', '今天 13:00', '普通', '待复核'], ['东区宿舍 402 室报修回访', '科创园物业 · 客服班', '今天 16:00', '普通', '待回访']],
    assistant: '项目当前有 <strong>18 单待接单</strong>、3 单临近超时，建议先安排工程班组处理研发楼空调告警。今日巡检计划完成 72%，B 区电梯巡检需在 11:30 前完成；收费对账暂无异常。',
    notices: [['班组', '今日工程班组设备巡检计划', '10-20', ''], ['物业', '物业服务月度回访安排', '10-19', 'green'], ['安全', '地下车库消防通道复查任务', '10-18', 'orange']],
    apps: [['工单中心', '单', '#347fe0'], ['设备巡检', '巡', '#16a594'], ['维修管理', '修', '#f19a43'], ['秩序巡逻', '巡', '#7b72dc'], ['保洁任务', '洁', '#3a8cda'], ['宿舍报修', '宿', '#38a877'], ['费用收缴', '收', '#e26d77'], ['统一支付', '付', '#279d81']],
    reminders: [['18 单工单等待班组接单', 'red'], ['B区电梯巡检 11:30 截止', 'blue'], ['今日物业服务交接班 18:00', '']]
  }
};

const state = { role: 'group', period: 'today', tab: '待办任务', page: 1, calendarMonth: 9, calendarDay: 20 };
const periods = { today: { label: '今日', factor: 1 }, week: { label: '本周', factor: .94 }, month: { label: '本月', factor: .88 } };
const periodChanges = { today: '本期', week: '较上周', month: '月度' };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function sparkline(points, color = '#63a7f3') {
  return `<span class="metric-spark"><svg viewBox="0 0 54 18" aria-hidden="true"><polyline points="${points}" fill="none" stroke="${color}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="52" cy="${points.split(' ').at(-1).split(',')[1]}" r="1.8" fill="${color}"/></svg></span>`;
}

function renderMetrics(data) {
  const tones = { blue: '#4a93ea', green: '#38b590', purple: '#8376dd', orange: '#e5a24a' };
  $('#metric-grid').innerHTML = data.metrics.map(metric => `
    <article class="metric-card" tabindex="0" data-module="${escapeHtml(metric.label)}">
      <div class="metric-top"><span class="metric-label">${escapeHtml(metric.label)}</span><span class="metric-icon ${metric.tone}">${escapeHtml(metric.icon)}</span></div>
      <div class="metric-value">${escapeHtml(metric.value)}</div>
      <div class="metric-bottom"><span class="metric-change ${metric.change.startsWith('-') ? 'down' : ''}">${escapeHtml(metric.change)}</span><span>${escapeHtml(metric.detail)}</span></div>
      ${sparkline(metric.spark, tones[metric.tone] || tones.blue)}
    </article>`).join('');
}

function renderPerformance(data) {
  $('#performance-title').textContent = data.performance.title;
  $('#performance-subtitle').textContent = data.performance.subtitle;
  $('#chart-footnote-label').textContent = data.performance.footnote;
  $('#performance-summary').innerHTML = data.performance.summary.map(item => `<span class="summary-chip">${escapeHtml(item[0])}<b>${escapeHtml(item[1])}</b><em class="up">${escapeHtml(item[2])}</em></span>`).join('');
  const bars = data.performance.chart;
  $('#performance-chart').innerHTML = bars.map(([name, value], i) => `<div class="chart-column"><span class="chart-value">${value}${data.performance.footnote.includes('完成率') ? '%' : ''}</span><div class="chart-bar-area"><div class="chart-bar" style="height:${Math.min(100, value)}%" title="${escapeHtml(name)} ${value}"></div></div><span class="chart-label">${escapeHtml(name)}</span></div>`).join('');
}

function renderFocus(data) {
  $('#focus-title').textContent = data.focus.title;
  $('#focus-subtitle').textContent = data.focus.subtitle;
  $('#focus-summary').innerHTML = data.focus.stats.map(([label, value, tone]) => `<div class="focus-stat"><span>${escapeHtml(label)}</span><b class="${tone}">${escapeHtml(value)}</b></div>`).join('');
  $('#focus-list').innerHTML = data.focus.list.map(([title, meta, tag, tone]) => `<div class="focus-item" tabindex="0" data-module="${escapeHtml(title)}"><span class="focus-priority ${tone === 'high' ? 'high' : ''}"></span><div class="focus-item-copy"><b>${escapeHtml(title)}</b><small>${escapeHtml(meta)}</small></div><span class="focus-tag ${tone === 'high' ? 'red' : ''}">${escapeHtml(tag)}</span></div>`).join('');
}

function taskRowsForTab(data) {
  const extraRows = {
    group: [
      ['年度预算调整说明复核', '集团财务部', '明天 11:00', '普通', '待补充'], ['政策专项资金申请审核', '集团财务部', '10月24日', '高', '处理中'], ['国有资产台账更新确认', '集团资管部', '10月24日', '普通', '待审核'], ['党建季度考核材料汇总', '集团党群部', '10月25日', '普通', '待阅'], ['重点合同续签会签', '华东分公司', '10月26日', '高', '待审核'], ['园区运营月报核查', '华南分公司', '10月27日', '普通', '待提交'], ['重点采购方案会签', '集团采购部', '10月28日', '高', '处理中'], ['安全检查闭环确认', '华北园区', '10月30日', '高', '待复核']
    ],
    park: [
      ['企业诉求月度回访计划', '科创园区 · 客服中心', '10月23日', '普通', '待处理'], ['停车服务商费用核验', '科创园区 · 运营部', '10月24日', '高', '待审核'], ['宿舍消防隐患整改反馈', '科创园区 · 宿舍管理', '10月24日', '高', '处理中'], ['园区重点企业走访安排', '科创园区 · 招商部', '10月25日', '普通', '待提交'], ['公共活动场地开放方案', '科创园区 · 运营部', '10月26日', '普通', '待协同'], ['绿色通道服务结项', '科创园区 · 工程部', '10月27日', '普通', '待审核'], ['节能改造项目付款确认', '科创园区 · 财务部', '10月28日', '高', '处理中'], ['公共服务满意度回访', '科创园区 · 客服中心', '10月29日', '普通', '待办']
    ],
    property: [
      ['研发楼 1F 配电间巡检', '科创园物业 · 工程班', '今天 17:00', '高', '待执行'], ['宿舍 2 号楼热水故障回访', '科创园物业 · 客服班', '今天 17:30', '普通', '待回访'], ['东区停车场道闸复核', '科创园物业 · 秩序班', '明天 09:00', '普通', '处理中'], ['A区公共区域保洁抽检', '科创园物业 · 保洁班', '明天 10:30', '普通', '待执行'], ['消防泵房月度保养', '科创园物业 · 工程班', '10月23日', '高', '待审核'], ['园区夜间巡逻路线确认', '科创园物业 · 秩序班', '10月24日', '普通', '待复核'], ['物业费异常账单核对', '科创园物业 · 客服班', '10月25日', '普通', '处理中'], ['宿舍公共区卫生复查', '科创园物业 · 保洁班', '10月26日', '普通', '待执行']
    ]
  };
  let rows = [...data.tasks, ...extraRows[data.role]];
  if (state.tab === '我发起的') {
    return rows.map((row, i) => [i === 0 ? '公共区域设备维修申请' : i === 1 ? '停车月卡退费申请' : row[0], row[1], row[2], row[3], i % 2 ? '处理中' : '已提交']);
  }
  if (state.tab === '抄送我的') {
    return rows.map((row, i) => [i === 0 ? '园区运营周报抄送' : i === 1 ? '物业服务评价月报' : row[0], row[1], row[2], '普通', '已阅']);
  }
  return rows;
}

function renderTasks(data) {
  const rows = taskRowsForTab(data);
  const offset = (state.page - 1) * 4;
  const visible = rows.slice(offset, offset + 4);
  $('#task-list').innerHTML = visible.map(row => {
    let statusClass = row[4] === '处理中' ? 'progress' : row[4] === '待阅' || row[4] === '已阅' ? '' : row[4] === '已提交' ? 'returned' : '';
    if (row[4] === '待接单') statusClass = 'returned';
    const priorityClass = row[3] === '高' ? 'high' : row[3] === '普通' ? 'normal' : '';
    return `<tr tabindex="0" data-module="${escapeHtml(row[0])}"><td class="task-name-cell">${escapeHtml(row[0])}</td><td class="task-org">${escapeHtml(row[1])}</td><td>${escapeHtml(row[2])}</td><td><span class="priority-label ${priorityClass}">${escapeHtml(row[3])}</span></td><td><span class="status-label ${statusClass}">${escapeHtml(row[4])}</span></td></tr>`;
  }).join('');
  $('#task-total').textContent = String(rows.length);
  const total = rows.length;
  $('#task-range').textContent = `显示 ${offset + 1}–${Math.min(offset + visible.length, total)} 项，共 ${total} 项`;
  $('#page-current').textContent = String(state.page);
}

function renderNotices(data) {
  $('#notice-list').innerHTML = data.notices.map(([category, title, date, tone]) => `<div class="notice-item" tabindex="0" data-module="${escapeHtml(title)}"><span class="notice-type ${tone}">${escapeHtml(category)}</span><span class="notice-title">${escapeHtml(title)}</span><span class="notice-date">${escapeHtml(date)}</span></div>`).join('');
}

function renderApps(data) {
  $('#apps-count').textContent = `${data.apps.length} 个应用`;
  $('#app-shortcuts').innerHTML = data.apps.map(([label, icon, color]) => `<button class="app-shortcut" data-module="${escapeHtml(label)}"><span class="app-icon" style="background:${color}">${escapeHtml(icon)}</span><span>${escapeHtml(label)}</span></button>`).join('');
}

function renderReminders(data) {
  $('#reminder-list').innerHTML = data.reminders.map(([text, tone]) => `<div class="reminder-item"><span class="reminder-pin ${tone === 'red' ? 'red' : tone === 'blue' ? 'blue' : ''}"></span><span>${escapeHtml(text)}</span></div>`).join('');
}

function scopeLabel(data) {
  const org = $('#organization-select').value || data.org;
  const period = periods[state.period].label;
  return `${org} · ${period}视角`;
}

function renderRole(role) {
  state.role = role;
  state.page = 1;
  const data = roleData[role];
  document.body.dataset.role = role;
  $('.workspace').dataset.role = role;
  $('#profile-title').textContent = data.name;
  $('#profile-org').textContent = data.context;
  $('#breadcrumb-role').textContent = `${data.name}门户`;
  $('#hero-eyebrow').textContent = data.eyebrow;
  $('#hero-title').textContent = data.title;
  $('#hero-description').textContent = data.description;
  $('#scope-note').textContent = data.permission;
  $('#assistant-body').innerHTML = data.assistant;
  $('#role-menu-name').textContent = data.name;
  $('#role-menu-short').textContent = data.short;
  $('#role-menu-trigger').setAttribute('aria-label', `当前门户角色：${data.name}，点击切换`);
  $('#task-title').textContent = role === 'group' ? '集团待办与审批' : role === 'park' ? '园区协同待办' : '物业工作清单';
  $('#task-subtitle').textContent = role === 'group' ? '汇总集团审批、督办与报表任务' : role === 'park' ? '企业服务、园区审批与跨部门协同' : '按班组与现场优先级排列';
  $('#task-total').textContent = role === 'group' ? '12' : '18';
  const select = $('#organization-select');
  const oldOrg = select.value;
  select.innerHTML = data.orgs.map((org, index) => `<option value="${escapeHtml(org)}" ${org === data.org ? 'selected' : ''}>${escapeHtml(org)}</option>`).join('');
  if (data.orgs.includes(oldOrg)) select.value = oldOrg;
  $$('.role-option').forEach(button => {
    const selected = button.dataset.role === role;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-checked', String(selected));
  });
  renderMetrics(data);
  renderPerformance(data);
  renderFocus(data);
  renderTasks({ ...data, role });
  renderNotices(data);
  renderApps(data);
  renderReminders(data);
  updatePeriodContext();
}

function updatePeriodContext() {
  const data = roleData[state.role];
  const factor = periods[state.period].factor;
  $$('.period-option').forEach(button => button.classList.toggle('selected', button.dataset.period === state.period));
  $('#profile-org').textContent = `${$('#organization-select').value || data.org} · ${periods[state.period].label}视角`;
  $$('.metric-card').forEach((card, index) => {
    const metric = data.metrics[index];
    card.querySelector('.metric-bottom span:last-child').textContent = state.period === 'today' ? metric.detail : `${periodChanges[state.period]} · ${metric.detail}`;
  });
  $('#chart-footnote-label').textContent = `${periods[state.period].label}${data.performance.footnote}`;
  const bars = $$('.chart-bar');
  bars.forEach((bar, i) => {
    const original = data.performance.chart[i][1];
    const value = state.period === 'today' ? original : Math.max(28, Math.round(original * (state.period === 'week' ? .96 : .91)));
    bar.style.height = `${Math.min(100, value)}%`;
    bar.parentElement.previousElementSibling.textContent = `${value}${data.performance.footnote.includes('完成率') ? '%' : ''}`;
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-mark">✓</span><span>${escapeHtml(message)}</span>`;
  $('#toast-region').append(toast);
  window.setTimeout(() => toast.remove(), 2800);
}

function openPreview(moduleName) {
  const data = roleData[state.role];
  const isNav = ['智慧办公', '数字大屏', '智慧物联', '智慧资管', '智慧物业', '智慧运营', '智慧AI', '智慧安全', '更多'].includes(moduleName);
  const isSensitive = /支付|收缴|资产|审批/.test(moduleName);
  $('#modal-title').textContent = moduleName;
  $('#modal-mark').textContent = moduleName.slice(0, 1);
  $('#modal-description').textContent = isNav ? `从 ${moduleName} 子系统进入对应业务页面。当前演示提供角色门户预览，子系统以入口反馈展示。` : `这是“${data.name}”可访问的 ${moduleName} 模块预览入口。实际功能页面可在对应子系统中继续展开。`;
  $('#modal-info').innerHTML = `<strong>当前角色：</strong>${escapeHtml(data.name)}<br><strong>数据范围：</strong>${escapeHtml($('#organization-select').value)}<br><strong>权限提示：</strong>${isSensitive ? '涉及审批、资金或资产信息，实际系统需按岗位授权。' : '当前为示例数据预览，不会提交或修改真实业务数据。'}`;
  $('#modal-layer').hidden = false;
  $('#modal-close').focus();
}

function closePreview() {
  $('#modal-layer').hidden = true;
}

function drawCalendar() {
  const grid = $('#calendar-grid');
  const month = state.calendarMonth;
  const year = 2026 + Math.floor(month / 12);
  const normalizedMonth = ((month % 12) + 12) % 12;
  const monthName = `${year}年${normalizedMonth + 1}月`;
  $('.calendar-top strong').textContent = monthName;
  grid.innerHTML = ['日', '一', '二', '三', '四', '五', '六'].map(day => `<span class="calendar-weekday">${day}</span>`).join('');
  const firstDay = new Date(year, normalizedMonth, 1).getDay();
  const days = new Date(year, normalizedMonth + 1, 0).getDate();
  const previousDays = new Date(year, normalizedMonth, 0).getDate();
  const eventDays = [7, 12, 20, 26];
  for (let i = 0; i < 42; i += 1) {
    let day = i - firstDay + 1;
    let muted = false;
    if (day < 1) { day = previousDays + day; muted = true; }
    else if (day > days) { day -= days; muted = true; }
    const selected = !muted && day === state.calendarDay;
    const hasEvent = !muted && eventDays.includes(day);
    grid.insertAdjacentHTML('beforeend', `<button class="calendar-day ${muted ? 'muted' : ''} ${selected ? 'selected' : ''} ${hasEvent ? 'has-event' : ''}" data-day="${day}" data-muted="${muted}" aria-label="${year}年${normalizedMonth + 1}月${day}日">${day}</button>`);
  }
  $('#calendar-event-title').textContent = state.calendarDay === 20 && normalizedMonth === 9 ? (state.role === 'group' ? '集团运营分析会' : state.role === 'park' ? '园区运营协调会' : '物业班组交接会') : `${normalizedMonth + 1}月${state.calendarDay}日工作安排`;
}

const closeRoleMenu = () => { $('#role-menu-popover').hidden = true; $('#role-menu-trigger').setAttribute('aria-expanded', 'false'); };
$('#role-menu-trigger').addEventListener('click', event => {
  event.stopPropagation();
  const opening = $('#role-menu-popover').hidden;
  $('#role-menu-popover').hidden = !opening;
  $('#role-menu-trigger').setAttribute('aria-expanded', String(opening));
  if (opening) $('#role-menu-popover .role-option.selected').focus();
});
$('#role-menu-popover').addEventListener('click', event => {
  const button = event.target.closest('.role-option');
  if (!button) return;
  const role = button.dataset.role;
  renderRole(role);
  drawCalendar();
  closeRoleMenu();
  showToast(`已切换至${roleData[role].name}门户`);
});
document.addEventListener('click', event => { if (!event.target.closest('.role-menu-wrap')) closeRoleMenu(); });
$$('.period-option').forEach(button => button.addEventListener('click', () => { state.period = button.dataset.period; updatePeriodContext(); showToast(`已切换至${periods[state.period].label}数据视角`); }));
$('#organization-select').addEventListener('change', () => { const data = roleData[state.role]; $('#profile-org').textContent = `${$('#organization-select').value} · ${periods[state.period].label}视角`; $('#scope-note').textContent = `当前查看“${$('#organization-select').value}”范围内的${data.name}授权数据；跨组织及未授权敏感信息不展示。`; showToast(`数据范围已切换：${$('#organization-select').value}`); });
$$('.task-tab').forEach(button => button.addEventListener('click', () => { state.tab = button.dataset.taskTab; state.page = 1; $$('.task-tab').forEach(tab => tab.classList.toggle('active', tab === button)); renderTasks({ ...roleData[state.role], role: state.role }); }));
$('#page-prev').addEventListener('click', () => { state.page = Math.max(1, state.page - 1); renderTasks({ ...roleData[state.role], role: state.role }); });
$('#page-next').addEventListener('click', () => { state.page = Math.min(3, state.page + 1); renderTasks({ ...roleData[state.role], role: state.role }); });
$('#organization-select').addEventListener('input', updatePeriodContext);
$('#calendar-grid').addEventListener('click', event => { const button = event.target.closest('.calendar-day'); if (!button || button.dataset.muted === 'true') return; state.calendarDay = Number(button.dataset.day); drawCalendar(); });
$('#month-prev').addEventListener('click', () => { state.calendarMonth -= 1; drawCalendar(); });
$('#month-next').addEventListener('click', () => { state.calendarMonth += 1; drawCalendar(); });
$('#calendar-more').addEventListener('click', () => openPreview('工作日历'));
$('#notification-button').addEventListener('click', () => { const panel = $('#notification-popover'); panel.hidden = !panel.hidden; });
document.addEventListener('click', event => { if (!event.target.closest('.top-actions')) $('#notification-popover').hidden = true; });
$('#search-button').addEventListener('click', () => openPreview('全局搜索'));
$('#help-button').addEventListener('click', () => openPreview('使用帮助'));
$('#report-button').addEventListener('click', () => showToast('运营简报已生成（演示态），可在通知中心查看。'));
$('#permission-help').addEventListener('click', () => openPreview('数据权限说明'));
$('#modal-close').addEventListener('click', closePreview);
$('#modal-confirm').addEventListener('click', closePreview);
$('#modal-layer').addEventListener('click', event => { if (event.target === $('#modal-layer')) closePreview(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closePreview(); closeRoleMenu(); } });
document.addEventListener('click', event => {
  const nav = event.target.closest('[data-system]');
  if (nav) {
    $$('.nav-item').forEach(item => item.classList.toggle('active', item === nav));
    if (nav.dataset.system !== '门户') openPreview(nav.dataset.system);
    else showToast('当前已处于门户工作台');
    return;
  }
  const module = event.target.closest('[data-module]');
  if (module) openPreview(module.dataset.module);
});
document.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.metric-card, .focus-item, .notice-item, .task-table tbody tr')) {
    event.preventDefault(); openPreview(event.target.dataset.module);
  }
});

renderRole(state.role);
drawCalendar();
