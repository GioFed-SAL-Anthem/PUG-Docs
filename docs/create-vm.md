---
id: create-vm
title: Creating a Virtual Machine or Container
---

# Creating a Virtual Machine or Container on PUG

This guide walks you through creating a Virtual Machine (VM) or a Linux Container (LXC) on the PUG server using the Proxmox VE Web Interface. It also explains how to upload ISO images for VMs and download container templates.

---

## When to Use a VM vs a Container

| Use Case                            | Virtual Machine (VM)       | Container (LXC)              |
|-------------------------------------|-----------------------------|------------------------------|
| Runs a different OS (e.g. Windows)  | ✅ Yes                      | ❌ No                        |
| Requires full OS isolation          | ✅ Yes                      | ⚠️ Limited                  |
| Lightweight Linux environment       | ❌ More overhead            | ✅ Very efficient            |
| Root filesystem customization       | ✅ Flexible                 | ⚠️ Limited by template       |
| Uses systemd or full init systems   | ✅ Fully supported          | ⚠️ Partial support          |

> 🔍 **Recommendation**: Use **VMs** for complex or multi-OS setups and **containers** for lightweight Linux applications.

---

## Step 1: Access Proxmox Web Interface

- Open your browser and go to the Proxmox Web UI (e.g., `https://pug.sal.disco.unimib.it:8006//`).
- Log in with your `admin` profile.

---

## Step 2: Upload ISO Image for VM Installation

Before creating a VM, upload the ISO image for your desired operating system:

1. Go to **Datacenter > Storage > local (your-node-name)**.
2. Click the **Content** tab.
3. Click **Upload**.
4. Select your ISO file and ensure **Content Type** is set to `ISO image`.
5. Click **Upload** to add it to your storage.

> 💡 You can download ISO files for OSes like Ubuntu, Debian, Fedora, or Windows from their official websites.

---

## Step 3: Download Container Template

If you are creating a container instead of a VM:

1. Go to **Datacenter > Storage > local (your-node-name)**.
2. Click the **CT Templates** tab.
3. Click **Templates**.
4. Choose a Linux distribution from the list (e.g., Ubuntu, Alpine, Debian).
5. Click **Download**.

Once downloaded, you can use it to create an LXC container.

---

## Step 4: Create a New Virtual Machine (VM)

1. Click on the **"Create VM"** button at the top-right.
2. Fill in the general settings:
   - **Node:** Select your Proxmox host node.
   - **VM ID:** Accept the default or specify manually.
   - **Name:** Enter a descriptive name.

### Configure VM Settings

- **OS:** Choose the operating system type (select the uploaded ISO).
- **System:** Choose BIOS/UEFI and SCSI controller (default options are fine).
- **CD/DVD:** Select the ISO image you uploaded earlier.
- **Hard Disk:** Choose storage and disk size (SSD recommended).
- **CPU:** Assign cores (e.g., 2 or 4).
- **Memory:** Allocate RAM (e.g., 4096MB = 4GB).
- **Network:** Use default bridge and `virtio` model for performance.

3. Click **Finish** to create the VM.

---

## Step 5: Create a New Container (Optional)

If you prefer to use a container:

1. Click **Create CT**.
2. Fill in:
   - **CT ID**
   - **Hostname**
   - **Password**
3. Select the downloaded **template**.
4. Configure:
   - **Disk size**
   - **CPU & memory**
   - **Network** 
5. Click **Finish** to create the container.

---

## Step 6: Start and Install the Operating System

- Select your new **VM or Container** from the node list.
- Click **Start**.
- For VMs, open the **Console** to begin OS installation.
- For containers, it will start immediately after creation.

---

## Step 7: Network Setup (VMs and Containers)

- Add a network device (usually a virtual bridge like `vmbr0`).
- For **VMs**, choose the **virtio** model for better performance.
- For **containers**, you can configure the IP manually or use DHCP.

:::tip

When assigning a static IP, make sure **not to reuse an IP already in use** on the network. If you're unsure, it's safer to select **DHCP** to let your router assign an available address automatically.

:::

## References

- [Proxmox Documentation](https://pve.proxmox.com/wiki/Main_Page)
- [Proxmox ISO Upload Guide](https://pve.proxmox.com/wiki/Installation_Media)
- [Container Templates Overview](https://pve.proxmox.com/wiki/Linux_Container)

---
