ENTRYPOINT := "./src/index.ts"

_default:
    @just --list

dev:
    yarn ncc run \
        {{ENTRYPOINT}}

clean:
    git clean -xdf
    just deps

deps:
    yarn install
    yarn syncpack
    yarn ncc cache clean

types:
    yarn tsc \
        --noEmit
