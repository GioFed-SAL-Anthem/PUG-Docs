# Proxmox VE User Configuration Guide

This document provides a basic example of how to configure users and permissions in Proxmox VE.

---

## Overview

Proxmox VE uses a role-based access control (RBAC) system. This allows administrators to assign fine-grained permissions to users over specific objects like virtual machines, storage, and nodes.

Proxmox VE supports the following authentication backends:

- **PAM**: Linux system users 
- **PVE**: Proxmox internal users 

:::note

The **PAM** realm is reserved for the `root` user only. When logging in or creating new users, make sure to select the PVE realm to avoid authentication issues.

:::

---

## Creating a New User via the Web GUI

1. Log in with your account.
2. Navigate to **Datacenter > Permissions > Users**.
3. Click **Add**.
4. Fill in the user details:
   - **Username**: e.g., `m.rossi`
   - **Password**: Choose a secure password
   - **Groups**: (Optional) Assign the user to groups for role management
5. Click **Add** to create the user.

:::note

For the **Group** selection, choose `admin` if you're creating an administrative user. Otherwise, select `students` for standard student accounts.

:::

## Assigning Permissions to a User

After creating the user, you need to assign appropriate permissions to control their access:

1. Go to **Datacenter > Permissions**.
2. Click **Add** and select **User Permission**.
3. In the dialog:
   - **Path**: Select the scope of the permission (e.g., `/vms/` for virtual machines, or `/` for the entire datacenter).
   - **User**: Choose the user you just created (e.g., `m.rossi@pve`).
   - **Role**: Select the role that fits the user's needs (e.g., `PVEVMUser` for VM management, `Administrator` for full access).
4. Click **Add** to apply the permission.

:::tip

Assign the least privilege necessary by choosing roles that only grant the permissions the user requires.

:::
