const portfolioItems = [
  {
    title: "Proxmox",
    synopsis: "Complete open-source platform for virtualization that tightly integrates KVM hypervisor and LXC containers.",
    desc: `Similar to VMware ESXi. Huge benefit of LXC (same underlying tech as docker) allows lightweight virtualization.
    Most of my services are hosted on Proxmox on LXC.`,
    img: "./portfolio/faduense.png",
    links: {
      "Link to Self-Host": "https://prox.jinis.online",
      "Link to Proxmox": "https://www.proxmox.com",
    },
    idx: 1,
  },
  {
    title: "Gitlab",
    synopsis: "Git repository hosting service. Alternative to Github.",
    desc: "Gitlab is feature rich allowing CI/CD. Gitea is a lightweight alternative. Running on Proxmox LXC.",
    img: "./portfolio/bitcoin.png",
    links: {
      "Link to Self-Host": "https://gitlab.jinis.online",
      "Link to Gitlab": "https://github.com/jin-park-dev/bodt-cms",
    },
    idx: 2,
  },
  {
    title: "Bitwarden",
    synopsis: "Open-source password manager similar to LastPass.",
    desc: `Self-host gives full feature of Bitwarden. I am running lightweight version Bitwarden RS on Proxmox LXC Docker`,
    img: "./portfolio/ejs-blog.png",
    links: {
      "Link to Self-Host": "https://bitwarden.jinis.online",
      "Link to Bitwarden": "https://bitwarden.com/",
      "Link to Bitwarden RS": "https://github.com/dani-garcia/bitwarden_rs",
    },
    idx: 3,
  },
  {
    title: "Zulip",
    synopsis: "Open-source team chat app similar to Slack.",
    desc: "Zulip is written in Django, Python. No limitation of history unlike Slack free version. Hosted on LXC.",
    img: "./portfolio/EJS.png",
    links: {
      "Link to Self-Host": "https://my-ejs-todo-list.herokuapp.com",
      "Link to Proxmox": "https://github.com/martin2844",
    },
    idx: 4,
  },
  // {
  //     title: 'Portfolio Item 5',
  //     synopsis: 'Please message me at twitter @codigoMate',
  //     desc: 'I really appriciate any messages',
  //     img: './portfolio/Mate.png',
  //     "Link to Proxmox": 'https://github.com/martin2844',
  //     "Link to Self-Host": 'https://codigomate.com',
  //     idx: 5
  // }

]

export default portfolioItems