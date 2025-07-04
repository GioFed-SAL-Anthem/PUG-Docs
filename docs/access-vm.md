---
id: access-vm
title: Accessing a VM or Container (Student Guide)
---

# Accessing a VM or Container (Student Guide)

As a student, you may be assigned access to a virtual machine (VM) or a Linux container (CT) for your coursework or projects. This guide explains how to access your assigned environment through Proxmox VE.

---

## Prerequisites

Before proceeding, ensure:

- You have a Proxmox **student account** (e.g., `j.doe@pve`)
- You know the **IP address** or **hostname** of your assigned VM or container
- Your environment is **started** (check with your instructor or admin if unsure)

---

## Step 1: Log in to the Proxmox Web Interface

1. Open your browser and go to the Proxmox URL (`https://pug.sal.disco.unimib.it:8086`)
2. Log in using your **student account credentials**
   - **Username**: your assigned username (e.g., `j.doe@pve`)
   - **Realm**: select `PVE`
3. Click **Login**

---

## Step 2: Locate Your Assigned VM or Container

- In the left sidebar, find the **node** your VM/CT is hosted on (e.g., `pug-node1`)
- Expand the node and look for your **assigned name** (e.g., `vm-j.doe`, `ct-j.doe`)
- Click on the name to view details

---

## Step 3: Start and Access the Console

1. If the VM/CT is **stopped**, click **Start** from the top menu
2. Click the **Console** tab
   - This opens a virtual terminal directly in your browser
   - You can log in using the credentials provided to you (usually username: `student`, or as instructed)

> 💡 **Tip:** Containers usually boot very fast. VMs may take longer, depending on the OS.
