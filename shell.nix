{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_20
    pkgs.pnpm
    pkgs.biome
  ];

  # Optionally, you can set shell hooks to run scripts when entering the shell
  shellHook = ''
    export NODE_ENV=development
    export IN_NIX_SHELL=1
    export BIOME_BIN_PATH=$(which biome)
    echo "Welcome! NodeJS: $(node -v) - PNPM: $(pnpm -v) - Biome: $(biome --version)"
  '';
}
