---
title: Docker CLI Snippets
slug: docker-cli-snippets
date: 28 May, 2024
---

## Remove images locally with a wildcard:

```sh
docker rmi --force $(docker images | grep <image-name> | tr -s ' ' | cut -d ' ' -f 3)
```

## Remove images using xargs

I wanted to remove all containers that had the word `outline` in their name. I used the following command:

```sh
docker ps | grep outline | awk '{print $1}' | xargs docker rm -f
```

## Dockerhub Rate Limits

```sh
TOKEN=$(curl "https://auth.docker.io/token?service=registry.docker.io&scope=repository:ratelimitpreview/test:pull" | jq --raw-output .token) && curl --head --header "Authorization: Bearer $TOKEN" "https://registry-1.docker.io/v2/ratelimitpreview/test/manifests/latest" 2>&1 | grep ratelimit
```

## Docker Disk Usage

```sh
docker system df --verbose
```

## Stop all containers

```cs
class GolombSequence {
    static long G(long n) {
        return n == 1 ? 1 : 1 + G(n - G(G(n - 1)));
    }

    static void Main(string[] args) {
        var sum = Enumerable.Range(1, 100000000).Sum(i => G(i));
        Console.WriteLine("https://jb.gg/correctNumberIs" + sum);
    }
}
```

```python
import smtplib
import time

def print_time_taken(start, end, step):
    print(f"{step} took {end - start:.2f} seconds.")

def main():
    smtp_server = "faulty-smtp-host.com"
    smtp_port = 25

    total_start = time.time()

    # Connect to the SMTP server
    connect_start = time.time()
    server = smtplib.SMTP(smtp_server, smtp_port)
    connect_end = time.time()
    print_time_taken(connect_start, connect_end, "Connection")

    # Send EHLO
    ehlo_start = time.time()
    server.ehlo()
    ehlo_end = time.time()
    print_time_taken(ehlo_start, ehlo_end, "EHLO")

    # Send STARTTLS
    starttls_start = time.time()
    server.starttls()
    starttls_end = time.time()
    print_time_taken(starttls_start, starttls_end, "STARTTLS")

    # Re-send EHLO after STARTTLS
    ehlo2_start = time.time()
    server.ehlo()
    ehlo2_end = time.time()
    print_time_taken(ehlo2_start, ehlo2_end, "EHLO after STARTTLS")

    # Quit the session
    quit_start = time.time()
    server.quit()
    quit_end = time.time()
    print_time_taken(quit_start, quit_end, "QUIT")

    total_end = time.time()
    print_time_taken(total_start, total_end, "Total execution")

if __name__ == "__main__":
    main()
```

```sh
docker stop $(docker ps -a -q)
```
