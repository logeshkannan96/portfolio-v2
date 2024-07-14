---
title: new blog content
slug: new-blog-content
description: New blog content
coverImage: https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

Vault let's you encrypt sensitive values in your playbook. These can be DB Passwords, API tokens etc that need to referenced inside the roles/task etc.

There are 2 ways to encrypt:

- File
- String

IMHO encrypting with a file is better even for a few variables.

## How To

1. Create a file called `secrets.enc` and add the contents in plain-text:

```yaml
password: secret
another_password: supersecret
```

2. Encrypt with `ansible-vault encrypt secrets.enc`

3. Store the password inside `.vault_password` (untracked from `git`) if you don't want to provide the password everytime.

4. Run the playbook with `ansible-playbook -i inventory playbook.yml -e @secrets.enc --vault-password-file=.vault_password`

That's all! `{{password}}` and `{{another_password}}` will be available inside tasks normally, no extra work needed.

### Managing Secrets

You can use these commands to view/edit secret file.

```Makefile
view-secrets:
	ansible-vault view secrets.enc --vault-password-file=.vault_password

edit-secrets:
	EDITOR=vim ansible-vault edit secrets.enc --vault-password-file=.vault_password
```