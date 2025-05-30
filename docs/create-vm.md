---
id: create-vm
title: Creating a Virtual Machine
---

# Creating a Virtual Machine on PUG

Follow these steps to create a new Virtual Machine (VM) on the PUG server using Proxmox:

## Step 1: Access Proxmox Web Interface

- Open your browser and navigate to the Proxmox web UI.
- Login with your admin credentials.

## Step 2: Create a New VM

- Click on **"Create VM"** button at the top-right corner.
- Fill in the VM details:
  - **Node:** Select the host node.
  - **VM ID:** Automatically assigned or manually set.
  - **Name:** Choose a descriptive VM name.

## Step 3: Configure VM Hardware

- **OS:** Choose the operating system type you want to install.
- **CD/DVD:** Select installation media (ISO image).
- **CPU:** Assign number of cores (e.g., 2 or 4 cores).
- **Memory:** Allocate RAM (e.g., 4GB, 8GB).
- **Storage:** Choose storage type and size (SSD recommended).

## Step 4: Network Setup

- Add a network device (usually a virtual bridge).
- Configure network model (virtio recommended for performance).

## Step 5: Review and Confirm

- Double-check all configuration settings.
- Click **Finish** to create the VM.

## Step 6: Start and Install

- Select your new VM from the node list.
- Click **Start**.
- Open the console to begin OS installation.

---

For advanced settings, refer to the [Proxmox documentation](https://pve.proxmox.com/wiki/Main_Page).
