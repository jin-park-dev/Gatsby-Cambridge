const portfolioItems = [
  {
    title: "Proxmox",
    synopsis: "Complete open-source platform for virtualization that tightly integrates KVM hypervisor and LXC containers.",
    desc: `Similar to VMware ESXi. Huge benefit of LXC (same underlying tech as docker) allows lightweight virtualization.
    Most of my services are hosted on Proxmox on LXC.`,
    img: "./portfolio/faduense.png",
    // links: {
    //   "Link to Self-Host": "https://prox.jinis.online",
    //   "Link to Proxmox": "https://www.proxmox.com",
    // },
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
    img: "./portfolio/bitcoin.png",
    links: [
      { "url": "https://gitlab.jinis.online", "content": "Link to Self-Host" },
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
    img: "./portfolio/ejs-blog.png",
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
    img: "./portfolio/EJS.png",
    links: [
      { "url": "https://zulip.jinis.online", "content": "Link to Self-Host" },
      { "url": "https://zulipchat.com", "content": "Link to Zulip" },
    ],
    idx: 4,
  },
  {
    title: "Statping",
    synopsis: "Open-source status page for your websites and applications.",
    desc: "Monitors and reports to slack. Hosted on Proxmox LXC Docker.",
    img: "./portfolio/EJS.png",
    links: [
      { "url": "https://statping.jinis.online", "content": "Link to Self-Host" },
      { "url": "https://github.com/hunterlong/statping", "content": "Link to Statping" },
    ],
    idx: 5,
  },
  {
    title: "OpenMediaVault",
    synopsis: "Network attached storage (NAS) solution based on Debian Linux.",
    desc: "Mainly used for NAS.",
    img: "./portfolio/EJS.png",
    links: [
      { "url": "https://omv.jinis.online/", "content": "Link to Self-Host" },
      { "url": "https://www.openmediavault.org/", "content": "Link to OpenMediaVault" },
    ],
    idx: 6,
  },

]

export default portfolioItems