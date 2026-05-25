import { motion } from "motion/react";
import portfolioData from "../data/portfolioData";

type DayCell = { date: string; count: number };

const leetcode = portfolioData.externalProfiles.leetcode;
const calendarColumns = 53;
const calendarRows = 7;
const calendarCells = calendarColumns * calendarRows;

function formatDateShort(d: string) {
  try {
    const [y, m, day] = d.split("-").map(Number);
    return new Date(y, m - 1, day).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return d;
  }
}

function formatStat(value: string | number | null | undefined) {
  if (typeof value === "number") return value.toLocaleString("en-US");
  return value?.trim() || "TODO";
}

function dateToIso(date: Date) {
  return date.toISOString().slice(0, 10);
}

function buildStaticDays(totalDays: number, counts: number[]): DayCell[] {
  const today = new Date();
  const days: DayCell[] = [];
  const leadingPreviewCells = Math.max(0, calendarCells - totalDays);

  for (let i = 0; i < leadingPreviewCells; i++) {
    days.push({
      date: `preview-${i + 1}`,
      count: counts[(i + 3) % counts.length] ?? 0,
    });
  }

  for (let i = totalDays - 1; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
    days.push({
      date: dateToIso(date),
      count: counts[i % counts.length] ?? 0,
    });
  }

  return days;
}

function getColor(count: number) {
  if (count === 0) return "#ebedf0";
  if (count === 1) return "#c6e48b";
  if (count === 2) return "#7bc96f";
  return "#196127";
}

export function LeetCodeCalendar() {
  const username = leetcode.username;
  const profileUrl = leetcode.profileUrl;
  const days = buildStaticDays(leetcode.activityPreview.days, leetcode.activityPreview.counts);

  const statCards = [
    { label: "Solved", value: leetcode.totalSolved, color: "#00B4D8" },
    { label: "Easy", value: leetcode.easySolved, color: "#7bc96f" },
    { label: "Medium", value: leetcode.mediumSolved, color: "#F0E040" },
    { label: "Hard", value: leetcode.hardSolved, color: "#FF6B6B" },
  ];

  return (
    <section id="leetcode-calendar" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F5F0E8] border-[3px] border-[#1A1A1A] p-5 sm:p-6"
          style={{ boxShadow: "5px 5px 0px #1A1A1A" }}
        >
          <div className="mb-6">
            <div>
              <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }} className="text-[11px] uppercase text-[#1A1A1A]">
                LeetCode Activity
              </span>
              <h2 style={{ fontFamily: "var(--font-display)" }} className="font-black text-3xl sm:text-4xl mt-1">
                @{username}
              </h2>
              <p style={{ fontFamily: "var(--font-mono)" }} className="text-xs font-bold uppercase tracking-wider mt-2 opacity-70">
                {leetcode.lastUpdated}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {statCards.map((card) => (
              <div
                key={card.label}
                className="border-[2px] border-[#1A1A1A] p-4 bg-white min-h-[118px]"
                style={{ boxShadow: "4px 4px 0px #1A1A1A" }}
              >
                <div
                  className="inline-block border-[2px] border-[#1A1A1A] px-2 py-1 text-[10px] font-bold uppercase mb-3"
                  style={{ fontFamily: "var(--font-mono)", backgroundColor: card.color }}
                >
                  {card.label}
                </div>
                <div style={{ fontFamily: "var(--font-display)" }} className="font-black text-3xl">
                  {formatStat(card.value)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between mb-3">
            <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] font-bold uppercase tracking-wider opacity-70">
              {leetcode.activityLabel}
            </div>
            <div style={{ fontFamily: "var(--font-mono)" }} className="text-[11px] font-bold uppercase tracking-wider opacity-60">
              {leetcode.lastUpdated}
            </div>
          </div>

          <div className="overflow-x-auto pb-1">
            <div className="w-max min-w-full border-[2px] border-[#1A1A1A] bg-white p-4" style={{ boxShadow: "3px 3px 0px #1A1A1A" }}>
              <div
                style={{
                  display: "grid",
                  width: "100%",
                  minWidth: "920px",
                  gridTemplateColumns: `repeat(${calendarColumns}, minmax(10px, 1fr))`,
                  gridTemplateRows: `repeat(${calendarRows}, minmax(10px, 1fr))`,
                  gridAutoFlow: "column",
                  gap: 5,
                }}
              >
                {days.map((d, i) => (
                  <div key={d.date + i}>
                    <div
                      title={d.date.startsWith("preview-") ? "Static preview cell" : `${d.count} submissions on ${formatDateShort(d.date)}`}
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        backgroundColor: getColor(d.count),
                        boxShadow: "1px 1px 0px #1A1A1A",
                        border: "2px solid #1A1A1A",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-6 px-6 py-3 border-[3px] border-[#1A1A1A] bg-[#00B4D8] text-sm font-bold uppercase tracking-wider"
            style={{ fontFamily: "var(--font-mono)", boxShadow: "5px 5px 0px #1A1A1A" }}
            whileHover={{ y: -2, boxShadow: "8px 8px 0px #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
          >
            View LeetCode Profile ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default LeetCodeCalendar;
