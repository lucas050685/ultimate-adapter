export function addMissingCommas(template: string): string {
  if (template.substring(0, 1) !== '{') return template;
  const arrayPattern = /[^\[]*(?=[^\[\]]*\])/gm;
  const matchs = template.match(arrayPattern);
  if (!matchs || matchs?.length <= 0) return template;

  let fixedTemplate = template;
  matchs.forEach((match) => {
    const loopPattern = /{{#[^\/]*(?={{\/)/gm;
    const matchLoops = (match.match(loopPattern) ?? []).map((m) => m.trim());
    let fixedMatch = match;
    matchLoops.forEach((matchLoop) => {
      if (matchLoop[matchLoop.length - 1] === ',') return;
      fixedMatch = fixedMatch.replace(matchLoop, `${matchLoop},`);
      fixedMatch = fixedMatch.replace(`${matchLoop},,`, `${matchLoop},`);
    });
    fixedTemplate = fixedTemplate.replace(match, fixedMatch);
  });

  return fixedTemplate;
}
