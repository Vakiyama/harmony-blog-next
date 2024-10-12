{
  description = "node project flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      with pkgs; {
        devShell = mkShell {
          buildInputs = [
            nodejs_20
            bun
          ];
        };
      }
    );
}

