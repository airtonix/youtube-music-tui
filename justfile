
_default:
    @just --list

dev:
    deno run \
        --allow-all \
        --unstable \
        ./src/index.ts

deps:
    deno cache \
        --reload \
        --unstable \
        ./src/index.ts
        