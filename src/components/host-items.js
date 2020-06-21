const portfolioItems = [
  {
    title: "Proxmox",
    synopsis: "Complete open-source platform for virtualization that tightly integrates KVM hypervisor and LXC containers.",
    desc: `Similar to VMware ESXi. Huge benefit of LXC (same underlying tech as docker) allows lightweight virtualization.
    Most of my services are hosted on Proxmox on LXC.`,
    img: "./selfhost/proxmox.png",
    links: [
      { "url": "https://prox.jinis.online", "content": "Link to Self-Host" },
      { "url": "https://www.proxmox.com", "content": "Link to Proxmox" },
    ],
    idx: 1,
  },
  {
    title: "Gitlab",
    synopsis: "Git repository hosting service. Alternative to Github.",
    desc: "Gitlab is feature rich allowing CI/CD. Gitea is a lightweight alternative. Running on Proxmox LXC.",
    img: "./selfhost/gitlab.png",
    links: [
      { "url": "https://github.com/jin-park-dev", "content": "Link to Self-Host" },
      { "url": "https://about.gitlab.com/", "content": "Link to Gitlab" },
    ],
    idx: 2,
  },
  {
    title: "Bitwarden",
    synopsis: "Open-source password manager similar to LastPass.",
    desc: `Self-host gives full feature of Bitwarden. I am running lightweight version Bitwarden RS on Proxmox LXC Docker.
    I find browser extension is big bonus and allow sync of multiple browsers for
    `,
    img: "./selfhost/bitwarden.png",
    links: [
      { "url": "https://bitwarden.jinis.online", "content": "Link to Self-Host" },
      { "url": "https://bitwarden.com", "content": "Link to Bitwarden" },
      { "url": "https://github.com/dani-garcia/bitwarden_rs", "content": "Link to Bitwarden RS" },
    ],
    idx: 3,
  },
  {
    title: "Zulip",
    synopsis: "Open-source team chat app similar to Slack.",
    desc: "Zulip is written in Django, Python. No limitation of history unlike Slack free version. Hosted on Proxmox LXC.",
    img: "./selfhost/zulip_square.png",
    links: [
      { "url": "https://zulip.jinis.online", "content": "Link to Self-Host" },
      { "url": "https://zulipchat.com", "content": "Link to Zulip" },
    ],
    idx: 4,
  },
  {
    title: "Statping",
    synopsis: "Open-source status page for your websites and applications.",
    desc: "Monitors up/down status of website/API. Sends notification to Slack if there are changes. Hosted on Proxmox LXC Docker.",
    img: "./selfhost/stateping_square.png",
    links: [
      { "url": "https://statping.jinis.online", "content": "Link to Self-Host" },
      { "url": "https://github.com/hunterlong/statping", "content": "Link to Statping" },
    ],
    idx: 5,
  },
  {
    title: "OpenMediaVault",
    synopsis: "Network attached storage (NAS) solution based on Debian Linux.",
    desc: "Mainly used for NAS. Hosted on Proxmox LXC.",
    img: "./selfhost/omv.png",
    links: [
      { "url": "https://omv.jinis.online/", "content": "Link to Self-Host" },
      { "url": "https://www.openmediavault.org/", "content": "Link to OpenMediaVault" },
    ],
    idx: 6,
  },
  {
    title: "Monica",
    synopsis: "Personal CRM. Remember everything about your friends, family and business relationships.",
    desc: "Self-host gives full feature of Monica CRM. Hosted on Proxmox LXC.",
    img: "./selfhost/monica.png",
    links: [
      { "url": "https://monica.jinis.online/", "content": "Link to Self-Host" },
      { "url": "https://www.monicahq.com/", "content": "Link to Monica" },
    ],
    idx: 7,
  },
  {
    title: "Nextcloud",
    synopsis: "Dropbox alternative.",
    desc: "Nextcloud also is used to host my calendar data with open protocol CalDAV. Hosted on a VPS running CentOS. Backed up with Restic on Wasabi (AWS S3 Storage).",
    img: "./selfhost/nextcloud_2.png",
    links: [
      { "url": "https://nextcloud.jinis.space/", "content": "Link to Self-Host" },
      { "url": "https://nextcloud.com/", "content": "Link to Nextcloud" },
    ],
    idx: 8,
  },
  {
    title: "Jenkins",
    synopsis: "Open source automation server. Commonly used for continuous integration (CI), continuous delivery (CD).",
    desc: "This is where logic for deployment for my apps are kept. Sends notification to Slack/Zulip. Merging into Master/Staging/Develop branch for my projects trigger build to be run. See below link for the full process.",
    img: "./selfhost/jenkins.png",
    links: [
      { "url": "https://jenkins.jinis.online/", "content": "Link to Self-Host" },
      { "url": "https://jenkins.io/", "content": "Link to Jenkins" },
    ],
    idx: 9,
  },
  {
    title: "Observium",
    synopsis: "Open source network monitoring platform.",
    desc: "Comprehensive monitoring platform giving much more data using SNMP protocol. Shows machine's CPU, Memory, HD info.",
    img: "./selfhost/observ.png",
    links: [
      { "url": "https://observ.jinis.online/", "content": "Link to Self-Host" },
      { "url": "https://www.observium.org/", "content": "Link to Observium" },
    ],
    idx: 10,
  },

]

export default portfolioItems