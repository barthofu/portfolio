{
  inputs = {
    naersk.url = "github:nix-community/naersk/master";
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils, naersk }:
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        naersk-lib = pkgs.callPackage naersk { };
      in
      {
        defaultPackage = naersk-lib.buildPackage ./.;
        devShell = with pkgs; mkShell {
          buildInputs = [
            nodejs_22
            pnpm
          ];
          
          shellHook = ''
            export PATH=$PWD/node_modules/.bin:$PATH
            export NODE_OPTIONS="--no-warnings"
            unset VSCODE_IPC_HOOK_CLI
            unset VSCODE_NLS_CONFIG
            unset ELECTRON_RUN_AS_NODE
            unset NODE_OPTIONS

            echo "🚀 DevShell ready with node and pnpm"
          '';
        };

      }
    );
}