import { useState } from "react";

const schedule = [
  {
    day: "Monday",
    tag: "Cardio + Upper Body",
    color: "#EF4444",
    cardio: { name: "Running / Brisk Walk", duration: "30 min", note: "Moderate pace, 5–6 km" },
    workout: [
      { name: "Push-ups", sets: "4 × 15" },
      { name: "Dumbbell Shoulder Press", sets: "3 × 12" },
      { name: "Tricep Dips (chair)", sets: "3 × 15" },
      { name: "Plank Hold", sets: "3 × 45 sec" },
    ],
  },
  {
    day: "Tuesday",
    tag: "Cardio + Core",
    color: "#F97316",
    cardio: { name: "Cycling / Jump Rope", duration: "25 min", note: "High intensity intervals" },
    workout: [
      { name: "Crunches", sets: "4 × 20" },
      { name: "Leg Raises", sets: "3 × 15" },
      { name: "Russian Twists", sets: "3 × 20" },
      { name: "Mountain Climbers", sets: "3 × 30 sec" },
    ],
  },
  {
    day: "Wednesday",
    tag: "Active Recovery",
    color: "#22C55E",
    cardio: { name: "Light Walk / Yoga / Stretching", duration: "30–40 min", note: "Low intensity, keep moving" },
    workout: [
      { name: "Full-body Stretch", sets: "15 min" },
      { name: "Foam Roll / Mobility", sets: "10 min" },
    ],
  },
  {
    day: "Thursday",
    tag: "Cardio + Lower Body",
    color: "#3B82F6",
    cardio: { name: "Running", duration: "35 min", note: "Push for 6–7 km" },
    workout: [
      { name: "Squats", sets: "4 × 20" },
      { name: "Lunges (each leg)", sets: "3 × 15" },
      { name: "Glute Bridges", sets: "3 × 20" },
      { name: "Calf Raises", sets: "3 × 25" },
    ],
  },
  {
    day: "Friday",
    tag: "HIIT + Full Body",
    color: "#8B5CF6",
    cardio: { name: "HIIT Circuit", duration: "25 min", note: "20s on / 10s off × 8 rounds" },
    workout: [
      { name: "Burpees", sets: "4 × 10" },
      { name: "Jump Squats", sets: "3 × 15" },
      { name: "Push-ups + Knee Tuck", sets: "3 × 12" },
      { name: "High Knees", sets: "3 × 40 sec" },
    ],
  },
  {
    day: "Saturday",
    tag: "Long Cardio",
    color: "#EC4899",
    cardio: { name: "Long Run / Swim / Sport", duration: "45–60 min", note: "Steady state, enjoy it" },
    workout: [
      { name: "Pull-ups / Rows", sets: "3 × max" },
      { name: "Dips", sets: "3 × 12" },
      { name: "Core Circuit", sets: "2 rounds" },
    ],
  },
  {
    day: "Sunday",
    tag: "Rest",
    color: "#6B7280",
    cardio: { name: "Complete Rest or Walk", duration: "Optional 20 min", note: "Let your body recover" },
    workout: [],
  },
];

const tips = [
  { icon: "🔥", text: "Target 500–700 kcal deficit daily (diet + exercise combined)" },
  { icon: "💧", text: "Drink 3–4L water daily — crucial for metabolism & recovery" },
  { icon: "🥗", text: "Eat high-protein, low-refined-carb — daal, eggs, paneer, sprouts" },
  { icon: "😴", text: "Sleep 7–8 hrs — poor sleep kills fat loss progress" },
  { icon: "📈", text: "Progressive overload — increase reps/intensity every 2 weeks" },
  { icon: "⚖️", text: "Weigh yourself once a week, same time, same conditions" },
];

export default function FitnessSchedule() {
  const [selected, setSelected] = useState(0);
  const day = schedule[selected];

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0F0F13", minHeight: "100vh", color: "#F1F1F3", padding: "24px 16px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#9CA3AF", textTransform: "uppercase", marginBottom: 6 }}>
            10 kg · 3 Months · IIT BBS
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            Your Fat Loss<br />
            <span style={{ color: day.color }}>Training Plan</span>
          </h1>
        </div>

        {/* Day Tabs */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
          {schedule.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setSelected(i)}
              style={{
                background: selected === i ? d.color : "#1C1C24",
                color: selected === i ? "#fff" : "#9CA3AF",
                border: "none",
                borderRadius: 8,
                padding: "7px 14px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {d.day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Day Card */}
        <div style={{ background: "#1C1C24", borderRadius: 16, padding: 24, marginBottom: 20, border: `1px solid ${day.color}30` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>{day.day}</h2>
              <span style={{ fontSize: 12, fontWeight: 600, color: day.color, textTransform: "uppercase", letterSpacing: "0.1em" }}>{day.tag}</span>
            </div>
            <div style={{ background: day.color + "20", borderRadius: 10, padding: "8px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: day.color, fontWeight: 700 }}>DURATION</div>
              <div style={{ fontSize: 15, fontWeight: 800 }}>{day.cardio.duration}</div>
            </div>
          </div>

          {/* Cardio Block */}
          <div style={{ background: "#13131A", borderRadius: 12, padding: 16, marginBottom: 16, borderLeft: `3px solid ${day.color}` }}>
            <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Cardio</div>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{day.cardio.name}</div>
            <div style={{ fontSize: 13, color: "#9CA3AF" }}>{day.cardio.note}</div>
          </div>

          {/* Workout Block */}
          {day.workout.length > 0 && (
            <div>
              <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>Strength / Workout</div>
              <div style={{ display: "grid", gap: 8 }}>
                {day.workout.map((ex, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#13131A", borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: day.color + "25", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: day.color }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{ex.name}</span>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: day.color }}>{ex.sets}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {day.workout.length === 0 && (
            <div style={{ textAlign: "center", padding: "20px 0", color: "#4B5563", fontSize: 14 }}>
              🛌 Rest day — your muscles grow when you recover
            </div>
          )}
        </div>

        {/* Monthly Progression */}
        <div style={{ background: "#1C1C24", borderRadius: 16, padding: 20, marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>Monthly Progression</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[
              { month: "Month 1", focus: "Build habit & base cardio fitness", km: "3–5 km runs", target: "−3 kg" },
              { month: "Month 2", focus: "Increase intensity & add weights", km: "5–7 km runs", target: "−3.5 kg" },
              { month: "Month 3", focus: "Peak effort, HIIT focus", km: "7–10 km runs", target: "−3.5 kg" },
            ].map((m) => (
              <div key={m.month} style={{ background: "#13131A", borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#22C55E", marginBottom: 6 }}>{m.month}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>{m.focus}</div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>{m.km}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#F1F1F3", marginTop: 8 }}>{m.target}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div style={{ background: "#1C1C24", borderRadius: 16, padding: 20 }}>
          <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>Key Rules</div>
          <div style={{ display: "grid", gap: 10 }}>
            {tips.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 18 }}>{t.icon}</span>
                <span style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.5 }}>{t.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
