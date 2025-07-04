# Frequently Asked Questions (FAQ)

Welcome to the FAQ section. Here you’ll find answers to common questions related to this Proxmox setup.

---

## ❓ What is Proxmox?

**Proxmox VE** is an open-source server virtualization management platform. It supports both KVM for virtual machines and LXC for containers.

---

## ❓ How do I log in to the Proxmox web interface?

After setting up your host, navigate to:

```bash
https://pug.sal.disco.unimib.it:8086
```

Log in using the credentials you configured during installation or provided in the user configuration.

---

## ❓ What does `vmbr0` do in the host configuration?

`vmbr0` is a virtual bridge interface. It acts like a virtual switch that allows virtual machines to communicate with each other and with the host. In this setup, it's configured for internal networking with NAT access to the external network via `ens3f0`.

---

## ❓ Why is IP forwarding enabled?

IP forwarding is required for NAT and port forwarding to work. This allows VMs connected to the `vmbr0` network to access external networks (like the internet) through the host.

---

## ❓ Can I add more port forwarding rules?

Yes. Uncomment and duplicate the example rules in the `host-config.md` file. Modify the external port and internal IP accordingly.

Example:
```bash
post-up iptables -t nat -A PREROUTING -p tcp -i ens3f0 --dport 10022 -j DNAT --to 10.10.10.22:22
```

## ❓ Where can I find more help?
Visit the official Proxmox Documentation or Proxmox Forum.