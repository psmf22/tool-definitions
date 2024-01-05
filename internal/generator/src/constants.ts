import * as core from '@actions/core';

function defaultIfEmpty(s: string, def: string) {
    return nullIfEmpty(s)==null ? def : s;
}

function nullIfEmpty(s: string) : string|null {
    return s.trim()=='' || s.trim()=='null' ? null : s;
}

export const signKey = Buffer.from(core.getInput("signKey", {required: true}), 'base64').toString('ascii');
export const signPassphrase = core.getInput("signPassphrase", {required: true});
export const toolName = core.getInput("toolName", {required: true});
export const githubToken = core.getInput("GITHUB_TOKEN", {required: true});
export const tagRegex = nullIfEmpty(core.getInput("tagRegex", {required: false}).trim());
export const assetRegex = nullIfEmpty(core.getInput("assetRegex", {required: false}).trim());
export const toolRepo = nullIfEmpty(core.getInput("toolRepo", {required: false}));
export const toolUrls = nullIfEmpty(core.getInput("toolUrls", {required: false}));
export const semver = defaultIfEmpty(core.getInput("semver", {required: false}), "none");
export const artifactTypes = JSON.parse(defaultIfEmpty(core.getInput("artifactTypes", {required: false}), '{".*": "default"}')) as {[key: string]: string};
export const workspaceDir = process.env.GITHUB_WORKSPACE;