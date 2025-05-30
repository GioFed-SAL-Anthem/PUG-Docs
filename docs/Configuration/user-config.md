# Proxmox VE User Configuration Guide

This document provides a basic example of how to configure users and permissions in Proxmox VE (Virtual Environment).

---

## Table of Contents

- [Overview](#overview)  
- [Default Users](#default-users)  
- [Creating a New User](#creating-a-new-user)  
- [Assigning Permissions](#assigning-permissions)  
- [Example User Configurations](#example-user-configurations)  
- [Best Practices](#best-practices)  

---

## Overview

Proxmox VE manages users and roles to control access to resources such as VMs, containers, and storage.  
Users can authenticate via:

- Linux PAM  
- Proxmox’s built-in authentication server  
- LDAP/Active Directory  

This guide shows how to create a dummy user and assign basic permissions.

---

## Default Users

- **root@pam**: Superuser with full administrative rights.
- **root@pve**: Same as above but authenticated via Proxmox authentication server.

---

## Creating a New User

You can create a new user via the Proxmox Web GUI or using the CLI.

### Using Web GUI

1. Log in as `root@pam`.
2. Go to **Datacenter > Permissions > Users**.
3. Click **Add**.
4. Enter:
   - **User ID**: e.g., `dummyuser@pve`
   - **Password**: Choose a secure password
   - **Groups**: Optional groups for role assignments
5. Click **Add**.

### Using CLI

```bash
pveum useradd dummyuser@pve -password secretpassword
