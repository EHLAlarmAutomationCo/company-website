document.addEventListener('DOMContentLoaded', function() {
  // 语言切换按钮事件绑定
  document.querySelectorAll('.languageList li').forEach(item => {
    item.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLang(lang);
    });
  });

  //initLang();
});

const translations = {
  en: {
    //header
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    contactUs: "Contact Us",
    FAQ: "FAQ",
    language: "Language",

    //Home page and services page
    welcome: "Welcome to EHL Alarm & Automation Co.",
    welcomeSub: "We provide professional and reliable security and automation solutions — from CCTV and alarm installations to gate repairs. Your safety, our priority.",
    ourServices: "Our Services",
    ourServicesSub: "CCTV installation · Autogate installation · Professional On-Site Service<br>Serving Residential, Commercial, and Comminuty Properties with Fast Response and Rich Experience",
    service1: "Install CCTV (Indoor & Outdoor)",
    service1Desc: "We provide indoor and outdoor CCTV camera installation with high-definition clarity and night vision to help monitor and secure your premises.",
    service1DescShort:"High-definition CCTV installation with night vision.",
    service2: "Install & Repair Autogates (Sliding, Roller Shutter, etc.)",
    service2Desc: "We install swing, sliding, and folding automatic gates with secure access control systems.",
    service2DescShort: "Auto gate installation & repair for swing, sliding, and shutter gates.",
    service3: "Install Alarm Systems",
    service3Desc: "We install basic alarm systems to help enhance general property security and alerting capabilities.",
    service3DescShort: "Basic alarm system installation to boost security.",
    service4: "Secure Door Installations (Digital Locks, Keypads, Auto-Doors)",
    service4Desc: "We install doors equipped with digital locks, keypads, and automation systems to enhance access control.<br>Options include biometric verification like fingerprint and facial recognition",
    service4DescShort: "Secure doors with digital locks & facial recognition.",
    service5: "Autogate Remote / Key Replacement & Repair",
    service5Desc: "We assist with repairing or replacing faulty autogate remotes and access keys to restore convenience.",
    service5DescShort: "Repair or replace faulty remotes and access keys.",
    service6: "Parking Management",
    service6Desc: "We provide smart parking solutions including automated barriers, RFID access, and license plate recognition. Improve traffic flow and security in residential or commercial parking areas.",
    service6DescShort: "Smart parking with license plate and RFID access.",
    service7: "Apartment Intercom",
    service7Desc: "We install intercom systems for apartments and condos, allowing residents to communicate with visitors at the entrance and unlock doors remotely. Suitable for multi-unit buildings and gated residences.",
    service7DescShort: "Intercoms for residents to talk and open doors remotely.",
    service8: "Access Control & Attendance Systems",
    service8Desc: "Integrated systems for managing entry and tracking employee attendance.<br>Use secure authentication such as RFID cards, fingerprint scanners, and facial recognition. Ideal for offices, factories, and gated communities.",
    service8DescShort: "Access & attendance via card, fingerprint, face ID.",

    feature1: "High-definition video",
    feature2: "Night vision",
    feature3: "Remote monitoring via app",
    feature4: "Professional installation team",
    feature5: "Secure access",
    feature6: "Smooth operation",
    feature7: "Backup battery options",
    feature8: "Maintenance",
    feature9: "Diverse choices",
    feature10: "Friendly support",
    feature11: "Fast on-site service",
    feature12: "Transparent pricing",
    feature13: "Spare parts available",
    learnMore: "Learn More →",
    ourLocation: "Our Location",
    viewLargeMap: "View Large Map",
    //footer and contact us
    contactUsShort: "Contact Us",
    contactDesc: "Have a question or need our service? Reach us directly:",
    phoneNumber: "<strong>Phone Number: </strong>",
    serviceScope: "<strong>Service Scope: </strong",
    location: "<strong>Location: </strong>",

    //services why choose us
    whyUs: "Why Choose Us",
    advantage1: "Fast Response",
    advantage1Desc: "Quick and efficient on-site service.",
    advantage2: "Experienced Technicians",
    advantage2Desc: "Reliable service by skilled and responsible technicians.",
    advantage3: "After-Sales Support",
    advantage3Desc: "Ongoing support is available to help ensure your system continues to function properly.",
    advantage4: "Custom Solutions",
    advantage4Desc: "We provide tailored setups based on your specific security or automation needs.",
    
    //about us
    aboutTitle: "About Us",
    aboutIntro: "EHL Alarm & Automation Co. is a local security and automation service provider based in Kuching, Sarawak, Malaysia. We specialize in the installation and repair of CCTV surveillance systems, autogates, access control systems, alarm systems, and digital locks.",
    aboutExperience: "Since our establishment in 1997, we have accumulated over 20 years of hands-on experience in installation and maintenance, having served hundreds of households, shops, and community clients.",
    aboutCustomers: "We value communication and collaboration with our clients and strive to provide tailored solutions based on each customer’s specific needs.",
    aboutTeam: "Our team consists of experienced and reliable technicians who focus on site inspection, equipment matching, and user experience, ensuring every service is stable, efficient, and thoughtful.",
    aboutValues: "Whether you're installing for the first time, upgrading your system, or need maintenance and inspection, we aim to be your trusted local technical partner.",

    //contact us
    contactUsIntro: "Whether you’re seeking professional installation, looking for long-term service support, or exploring collaboration opportunities, we’re here to help. <br> You may also submit your resume if you're interested in joining our team.",
    contactSubInfo: "Send us your inquiries, we'll get back to you!",
    joinUs: "Join Us",
    joinUsSub: "Intereseted in working with us? Click to apply.",
    email: "Email Address: ",

    // 其他翻译项...

  },
  zh: {
    home: "主页",
    aboutUs: "关于我们",
    services: "服务项目",
    contactUs: "联系我们",
    FAQ: "常见问题",
    language: "语言",

    //Home page and services page
    welcome: "欢迎来到 EHL Alarm & Automation Co.",
    welcomeSub: "我们致力于为您提供专业可靠的安防与自动化解决方案，包括监控安装、电动门维修、警报系统等。为您的家庭与企业保驾护航。",
    ourServices: "我们的服务",
    ourServicesSub: "安装监控・修理电动门・专业上门服务<br>小区・商铺・家庭，皆可服务，快速响应，经验丰富",
    service1: "安装闭路电视（室内与室外）",
    service1Desc: "我们提供室内和室外的高清夜视闭路电视安装服务，帮助您监控并保护您的场所。",
    service1DescShort: "高清夜视监控系统安装。",
    service2: "安装与维修自动门（滑动门、卷帘门等）",
    service2Desc: "我们安装自动摆门、滑动门和折叠门，配备安全的门禁系统。",
    service2DescShort: "自动门安装与维修（摆门、滑门、卷帘门）。",
    service3: "安装警报系统",
    service3Desc: "我们安装基础的警报系统，以提升整体安全和警示能力。",
    service3DescShort: "安装基础警报系统，提升安全。",
    service4: "安全门安装（电子锁、密码锁、自动门）",
    service4Desc: "我们安装配备数字锁、密码锁与自动系统的安全门，增强门禁控制。<br>可选项包括指纹与人脸识别等生物识别验证方式。",
    service4DescShort: "安装数字锁或人脸识别的安全门。",
    service5: "自动门遥控器/钥匙更换与维修",
    service5Desc: "我们维修或更换损坏的自动门遥控器和钥匙，恢复您的使用便利。",
    service5DescShort: "遥控器与门禁钥匙维修与更换。",
    service6: "停车管理系统",
    service6Desc: "我们提供智能停车解决方案，包括自动栏杆、RFID通行与车牌识别，改善住宅或商业区的通行与安全。",
    service6DescShort: "智能停车管理系统，含车牌与RFID通行。",
    service7: "公寓对讲系统",
    service7Desc: "我们为公寓与共管公寓安装对讲系统，方便住户与访客通话并远程开门，适用于多户型住宅和有门禁的社区。",
    service7DescShort: "公寓对讲系统，可远程通话与开门。",
    service8: "门禁与考勤系统",
    service8Desc: "整合进出管理与员工考勤追踪系统，支持刷卡、指纹、人脸识别等安全认证，适用于办公室、工厂和封闭社区。",
    service8DescShort: "门禁与考勤系统，支持刷卡、指纹、人脸。",

    feature1: "高清视频",
    feature2: "夜视功能",
    feature3: "APP远程监控",
    feature4: "专业安装团队",
    feature5: "安全门禁",
    feature6: "运行顺畅",
    feature7: "备用电池选项",
    feature8: "维护服务",
    feature9: "多种选择",
    feature10: "贴心支持",
    feature11: "快速上门服务",
    feature12: "价格透明",
    feature13: "备件供应",
    learnMore: "了解更多 →",
    ourLocation: "我们的地址",
    viewLargeMap: "查看大地图",

    //footer and contact us
    contactUsShort: "联系我们",
    contactDesc: "有问题或需要服务？欢迎联系我们：",
    phoneNumber: "联系电话：",
    serviceScope: "服务范围：",
    location: "公司地址：",

    //services why choose us
    whyUs: "为什么选择我们",
    advantage1: "响应迅速",
    advantage1Desc: "快速高效的上门服务。",
    advantage2: "经验丰富的技术员",
    advantage2Desc: "由专业负责的技术员提供可靠服务。",
    advantage3: "售后支持",
    advantage3Desc: "持续的支持，确保系统运行正常。",
    advantage4: "定制解决方案",
    advantage4Desc: "我们根据您的安防或自动化需求量身定制解决方案。",

    //about us
    aboutTitle: "关于我们",
    aboutIntro: "EHL Alarm & Automation Co. 是一家位于马来西亚砂捞越古晋的本地安防与自动化服务公司，专注于安装与维修 CCTV 监控系统、电动门、门禁系统、警报器及电子锁等。",
    aboutExperience: "自 1997 年成立以来，我们已拥有 20 多年现场安装与维护经验，服务过数百户家庭、商铺与小区客户，积累了丰富的实战经验。",
    aboutCustomers: "我们注重与客户的沟通与配合，致力于根据每位客户的具体需求，提供量身定制的解决方案。",
    aboutTeam: "我们的团队由多位经验丰富、细致可靠的技术人员组成，专注于实地勘察、设备适配与用户体验，确保每一次服务都稳定、高效、贴心。",
    aboutValues: "无论您是首次安装、设备升级，还是已有系统需要检查与维护，我们都愿意成为您值得信赖的本地技术伙伴。",

    //contact us
    contactUsIntro: "无论您需要专业的安装服务、长期的售后支持，或是有意探索合作机会，我们都乐意协助。<br> 如果您有兴趣加入我们的团队，也欢迎提交简历。",
    contactSubInfo: "欢迎向我们发送任何疑问，我们会尽快回复您！",
    joinUs: "加入我们的团队",
    joinUsSub: "有兴趣与我们共事吗？点击申请。",
    email: "电子邮箱：",
    // 其他翻译项...
    
  },
  ms: {  // 统一改为小写
    home: "Laman Utama",
    aboutUs: "Tentang Kami",
    services: "Perkhidmatan",
    contactUs: "Hubungi Kami",
    FAQ: "Soalan Lazim",
    language: "Bahasa",

    //Home page and services page
    welcome: "Selamat datang ke EHL Alarm & Automation Co.",
    welcomeSub: "Kami komited untuk menyediakan penyelesaian keselamatan dan automasi yang profesional dan boleh dipercayai, termasuk pemasangan pemantauan, pembaikan pintu automatik, sistem penggera dan banyak lagi. Lindungi rumah dan perniagaan anda bersama kami.",
    ourServices: "Perkhidmatan Kami",
    ourServicesSub: "Pemasangan CCTV ・ Pembaikan Autogate ・ Perkhidmatan Profesional di Lokasi<br>Beroperasi untuk Komuniti, Kedai, dan Rumah dengan Tindak Balas Pantas dan Pengalaman Luas",
    service1: "Pemasangan CCTV (Dalam & Luar Bangunan)",
    service1Desc: "Kami menyediakan pemasangan kamera CCTV dalam dan luar bangunan dengan kualiti definisi tinggi dan penglihatan malam untuk memantau dan melindungi premis anda.",
    service1DescShort: "Pemasangan CCTV definisi tinggi dengan penglihatan malam.",
    service2: "Pemasangan & Pembaikan Autogate (Gelangsar, Pintu Penggulung, dll.)",
    service2Desc: "Kami memasang autogate jenis ayun, gelangsar dan lipat dengan sistem kawalan akses yang selamat.",
    service2DescShort: "Pemasangan & pembaikan autogate jenis ayun, gelangsar & penggulung.",
    service3: "Pemasangan Sistem Penggera",
    service3Desc: "Kami memasang sistem penggera asas untuk meningkatkan keselamatan dan memberi amaran awal.",
    service3DescShort: "Pemasangan sistem penggera asas untuk keselamatan.",
    service4: "Pemasangan Pintu Keselamatan (Kunci Digital, Pad Kekunci, Pintu Automatik)",
    service4Desc: "Kami memasang pintu keselamatan yang dilengkapi dengan kunci digital, pad kekunci, dan sistem automasi.<br>Pilihan termasuk pengesahan biometrik seperti cap jari dan pengecaman wajah.",
    service4DescShort: "Pemasangan pintu keselamatan dengan kunci digital & pengecaman wajah.",
    service5: "Penggantian & Pembaikan Alat Kawalan Jauh / Kunci Autogate",
    service5Desc: "Kami membantu membaiki atau menggantikan alat kawalan jauh dan kunci akses autogate yang rosak untuk keselesaan anda.",
    service5DescShort: "Pembaikan & penggantian alat kawalan jauh atau kunci rosak.",
    service6: "Pengurusan Tempat Letak Kereta",
    service6Desc: "Kami menyediakan penyelesaian parkir pintar termasuk palang automatik, akses RFID dan pengecaman nombor plat. Meningkatkan aliran trafik dan keselamatan di kawasan kediaman atau komersial.",
    service6DescShort: "Pengurusan parkir pintar dengan akses nombor plat & RFID.",
    service7: "Interkom Pangsapuri",
    service7Desc: "Kami memasang sistem interkom untuk pangsapuri dan kondominium, membolehkan penghuni berkomunikasi dengan pelawat dan membuka pintu dari jauh. Sesuai untuk bangunan berbilang unit dan komuniti berpagar.",
    service7DescShort: "Sistem interkom untuk penghuni bercakap & buka pintu dari jauh.",
    service8: "Sistem Kawalan Akses & Kehadiran",
    service8Desc: "Sistem bersepadu untuk mengurus kemasukan dan menjejak kehadiran pekerja.<br>Gunakan pengesahan selamat seperti kad RFID, pengimbas cap jari dan pengecaman wajah. Sesuai untuk pejabat, kilang dan komuniti berpagar.",
    service8DescShort: "Kawalan akses & kehadiran melalui kad, cap jari & pengecaman wajah.",

    feature1: "Video definisi tinggi",
    feature2: "Penglihatan malam",
    feature3: "Pemantauan jauh melalui aplikasi",
    feature4: "Pasukan pemasangan profesional",
    feature5: "Akses selamat",
    feature6: "Operasi lancar",
    feature7: "Pilihan bateri sandaran",
    feature8: "Penyelenggaraan",
    feature9: "Pelbagai pilihan",
    feature10: "Sokongan mesra",
    feature11: "Perkhidmatan segera di lokasi",
    feature12: "Harga telus",
    feature13: "Alat ganti disediakan",
    learnMore: "Ketahui Lebih Lanjut →",
    ourLocation: "Lokasi Kami",
    viewLargeMap: "Lihat Peta Besar",

    //footer and contact us
    contactUsShort: "Hubungi Kami",
    contactDesc: "Ada soalan atau perlukan perkhidmatan kami? Hubungi kami terus:",
    phoneNumber: "Nombor Telefon: ",
    serviceScope: "Skop Perkhidmatan: ",
    location: "Lokasi: ",

    //services why choose us
    whyUs: "Kenapa Pilih Kami",
    advantage1: "Tindak Balas Pantas",
    advantage1Desc: "Perkhidmatan segera dan cekap di lokasi.",
    advantage2: "Juruteknik Berpengalaman",
    advantage2Desc: "Perkhidmatan boleh dipercayai oleh juruteknik yang mahir dan bertanggungjawab.",
    advantage3: "Sokongan Selepas Jualan",
    advantage3Desc: "Sokongan berterusan untuk memastikan sistem anda sentiasa berfungsi dengan baik.",
    advantage4: "Penyelesaian Tersuai",
    advantage4Desc: "Kami menyediakan pemasangan mengikut keperluan keselamatan atau automasi anda.",

    //about us
    aboutTitle: "Tentang Kami",
    aboutIntro: "EHL Alarm & Automation Co. ialah syarikat perkhidmatan keselamatan dan automasi tempatan yang berpangkalan di Kuching, Sarawak, Malaysia. Kami pakar dalam pemasangan dan pembaikan sistem CCTV, pintu automatik, sistem kawalan akses, sistem penggera dan kunci digital.",
    aboutExperience: "Sejak ditubuhkan pada tahun 1997, kami telah mengumpul lebih 20 tahun pengalaman dalam pemasangan dan penyelenggaraan, serta telah berkhidmat kepada ratusan isi rumah, kedai dan pelanggan komuniti.",
    aboutCustomers: "Kami menghargai komunikasi dan kerjasama dengan pelanggan, serta berusaha untuk menyediakan penyelesaian yang disesuaikan mengikut keperluan khusus setiap pelanggan.",
    aboutTeam: "Pasukan kami terdiri daripada juruteknik yang berpengalaman dan boleh dipercayai, yang memberi tumpuan kepada tinjauan tapak, kesesuaian peralatan dan pengalaman pengguna, bagi memastikan setiap perkhidmatan adalah stabil, cekap dan mesra.",
    aboutValues: "Sama ada anda membuat pemasangan kali pertama, menaik taraf sistem, atau memerlukan pemeriksaan dan penyelenggaraan, kami komited untuk menjadi rakan teknikal tempatan yang anda percayai.",

    //contact us
    contactUsIntro: "Sama ada anda mencari pemasangan profesional, sokongan perkhidmatan jangka panjang, atau peluang kerjasama, kami sedia membantu.<br> Anda juga boleh menghantar resume jika berminat untuk menyertai pasukan kami.",
    contactSubInfo: "Hantar pertanyaan anda kepada kami, kami akan memberi maklum balas secepat mungkin!",
    joinUs: "Sertai Kami",
    joinUsSub: "Berminat untuk bekerja bersama kami? Klik untuk memohon.",
    email: "Alamat E-mel: ",
    // 其他翻译项...
  }
};

function changeLang(lang) {
  console.log(`change language to: ${lang}`, translations[lang]);
  
  if (!translations[lang]) {
    console.error(`无效语言: ${lang}`);
    return;
  }

  localStorage.setItem("lang", lang);
  window.history.replaceState({}, "", `?lang=${lang}`);
  
  applyTranslations(lang);
  updateLinks(lang);

  highlightCurrentLanguage(lang);
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  console.log(`found${elements.length} element need to translate`);
  
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang]?.[key];
    
    if (translation) {
      el.innerHTML = translation;
    } else {
      console.warn(`缺少翻译: ${lang}.${key}`);
    }
  });
}

function updateLinks(lang) {
  document.querySelectorAll("a").forEach(link => {
    const url = new URL(link.href, window.location.origin);
    url.searchParams.set("lang", lang);
    link.href = url.toString();
  });
}

function initLang() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const savedLang = localStorage.getItem("lang");
  const defaultLang = "en";
  
  const lang = urlLang || savedLang || defaultLang;
  console.log(`initial language ${lang}`);
  
  changeLang(lang);
}

function highlightCurrentLanguage(lang) {
  // 移除所有高亮
  document.querySelectorAll('.languageList li').forEach(item => {
    item.classList.remove('active-language');
  });
  
  // 添加当前语言高亮
  const currentLangItem = document.querySelector(`.languageList li[onclick*="${lang}"]`);
  if (currentLangItem) {
    currentLangItem.classList.add('active-language');
  }
  
  // 更新语言切换按钮文字（可选）
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle && translations[lang]?.language) {
    languageToggle.textContent = translations[lang].language;
  }
}