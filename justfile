ENTRYPOINT := "./src/index.tsx"

_default:
    @just --list

dev:
    deno run \
        --allow-all \
        --unstable \
        {{ENTRYPOINT}}

deps:
    deno cache \
        --reload \
        --unstable \
        {{ENTRYPOINT}}

check:
    deno check \
        --unstable \
        {{ENTRYPOINT}}

    deno fmt --check \
        --unstable \
        {{ENTRYPOINT}}

    deno lint \
        --unstable \
        {{ENTRYPOINT}}
