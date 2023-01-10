import { SkillProps } from "./models";

export const isTag = ({ type }: { type: string }) => type === "tag";
export const isProgress = <
  T extends Readonly<{ type?: string; percent?: number }>
>(
  param: T
): param is Required<T> =>
  param.type === "progress" || typeof param.percent === "number";

export const updateElementWidth = (entry: IntersectionObserverEntry) => {
  const el = entry.target as HTMLElement;
  const percent = el.dataset.percent;

  if (!percent) return;

  el.style.width = entry.isIntersecting ? `${percent}%` : "0%";
};

const getIndexOf =
  (type: "tag" | "percent") =>
  (data: SkillProps["data"], skillIdx: number, subSkillIdx: number) =>
    data
      .slice(0, skillIdx)
      .filter((skill) => skill.type === type)
      .reduce((acc, { subskills }) => acc + subskills.length, 0) + subSkillIdx;

export const getIndexOfTag = getIndexOf("tag");
export const getIndexOfProgress = getIndexOf("percent");
