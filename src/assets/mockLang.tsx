const _langData = [
  {
    lang: 'en',
    select: [
      { lang: 'en', value: 'en' },
      { lang: 'th', value: 'th' },
    ],
    card: {
      title: 'test',
      text: [
        { content: 'layout & style', page: 'layout' },
        { content: 'content api' },
        { content: 'form & table' },
      ],
    },
    control: {
      shape: 'move shape',
      position: 'move position',
    },
  },
  {
    lang: 'th',
    select: [
      { lang: 'en', value: 'อังกฤษ' },
      { lang: 'th', value: 'ไทย' },
    ],
    card: {
      title: 'แบบทดสอบ',
      text: [
        { content: 'การจัดการหน้าเว็ป', page: 'layout' },
        { content: 'การเชื่อมต่อ API' },
        { content: 'การจัดการหน้าฟอร์ม' },
      ],
    },
    control: {
      shape: 'เลื่อนรูปแบบ',
      position: 'เปลี่ยนตำแหน่ง',
    },
  },
];

export default _langData;
