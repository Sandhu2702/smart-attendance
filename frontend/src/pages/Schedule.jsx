import React, { useState } from "react";
import { 
  Plus, 
  Copy, 
  Sun, 
  Calendar as CalendarIcon, 
  RefreshCw, 
  Folder, 
  ChevronDown, 
  MoreHorizontal
} from "lucide-react";

export default function ManageSchedule() {
  const [activeDay, setActiveDay] = useState("Mon");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Mock Calendar Grid Generation
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2; // Offset to start month correctly
    return day > 0 && day <= 30 ? day : "";
  });

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans text-[var(--text-body)]">

      <main className="max-w-[1600px] mx-auto p-6 md:p-8 space-y-8 animate-in fade-in duration-500">
        
        {/* --- PAGE HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Manage schedule</h1>
            <p className="text-slate-500 mt-1">Edit classes, recurring timetables, and special days</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 text-slate-500 hover:text-[var(--text-body)] font-medium transition">
              Discard changes
            </button>
            <button className="px-6 py-2.5 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--text-on-primary)] rounded-xl font-semibold shadow-sm transition active:scale-95">
              Save schedule
            </button>
          </div>
        </div>

        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* LEFT SECTION: CLASS TIMETABLE (Span 8) */}
          <div className="xl:col-span-8 space-y-6">
            
            {/* Timetable Header & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Class timetable</h3>
                <p className="text-sm text-slate-500">Configure daily timetable and recurring sessions</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 text-slate-500 text-sm font-medium hover:bg-white px-3 py-1.5 rounded-lg transition">
                  <Copy size={16} /> Duplicate day
                </button>
                <button className="flex items-center gap-2 bg-[#4F46E5] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4338ca] transition shadow-sm">
                  <Plus size={16} /> Add class
                </button>
              </div>
            </div>

            {/* Day Selector Pill */}
            <div className="inline-flex bg-gray-100 p-1 rounded-full">
              <button className="px-5 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-700">Week</button>
              {days.map(day => (
                <button 
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeDay === day 
                      ? "bg-blue-100 text-blue-700 shadow-sm" 
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Classes Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Class Card 1 */}
              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:border-blue-200 transition group cursor-pointer relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-900">Mathematics 10A</h4>
                  <span className="text-xs font-medium text-slate-500">08:00 - 09:00</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-sm text-slate-500">Room 203 · Teacher: Alex Johnson</p>
                  <span className="bg-[#10B981] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Active</span>
                </div>
              </div>

              {/* Action Card: New Class Slot */}
              <div className="bg-slate-50 p-5 rounded-xl border border-dashed border-slate-200 flex flex-col justify-center cursor-pointer hover:bg-slate-100 transition h-full min-h-[100px]">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-slate-800">New class slot</h4>
                  <Plus size={20} className="text-slate-400" />
                </div>
                <p className="text-sm text-slate-400 mt-1">Tap to configure subject and time</p>
              </div>

              {/* Class Card 2 */}
              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:border-blue-200 transition group cursor-pointer relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-900">Physics 9B</h4>
                  <span className="text-xs font-medium text-slate-500">09:15 - 10:15</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-sm text-slate-500">Lab 2 · Teacher: Alex Johnson</p>
                  <span className="bg-[#10B981] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Active</span>
                </div>
              </div>

              {/* Action Card: Mark as Holiday */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-center cursor-pointer hover:bg-slate-100 transition h-full min-h-[100px]">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-slate-800">Mark as holiday</h4>
                  <Sun size={20} className="text-slate-400" />
                </div>
                <p className="text-sm text-slate-400 mt-1">Disable attendance for this date</p>
              </div>

              {/* Class Card 3 */}
              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:border-blue-200 transition group cursor-pointer relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-900">Chemistry 11C</h4>
                  <span className="text-xs font-medium text-slate-500">11:00 - 12:00</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-sm text-slate-500">Lab 1 · Teacher: Alex Johnson</p>
                  <span className="bg-[#F59E0B] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">Pending</span>
                </div>
              </div>

              {/* Spacer for grid */}
              <div className="hidden md:block"></div>

              {/* Class Card 4 (Free hours) */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-slate-200 transition group cursor-pointer relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-900">Free / Office hours</h4>
                  <span className="text-xs font-medium text-slate-500">12:30 - 13:00</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-sm text-slate-400">No face recognition · Optional</p>
                  <span className="text-slate-400 text-[10px] font-bold uppercase">Not tracked</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION: CALENDAR OVERVIEW (Span 4) */}
          <div className="xl:col-span-4 space-y-6">
            
            {/* Calendar Container */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">Calendar overview</h3>
                <p className="text-sm text-slate-500">Drag to adjust special days and exceptions</p>
              </div>

              {/* Month Selector */}
              <div className="flex items-center gap-2 mb-4 cursor-pointer hover:bg-gray-50 w-fit px-2 py-1 rounded transition">
                <span className="font-semibold text-slate-800">September 2025</span>
                <ChevronDown size={16} className="text-slate-400" />
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm mb-2">
                {["M", "T", "W", "T", "F", "S", "S"].map(d => (
                  <span key={d} className="text-xs font-medium text-slate-400">{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2 text-sm">
                {calendarDays.map((day, idx) => {
                  let cellClass = "h-8 w-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-gray-50 cursor-pointer transition";
                  
                  if (day === 1) cellClass = "h-8 w-8 flex items-center justify-center rounded-lg bg-[#4F46E5] text-white font-bold shadow-md"; // Selected
                  else if ([4, 10, 11, 17, 22, 26].includes(day)) cellClass = "h-8 w-8 flex items-center justify-center rounded-lg bg-[#10B981] text-white font-medium shadow-sm"; // Active/Green
                  else if (day === 12 || day === 25) cellClass = "h-8 w-8 flex items-center justify-center rounded-lg bg-[#4F46E5] text-white font-medium opacity-80"; // Blueish

                  return (
                    <div key={idx} className="flex justify-center">
                      <span className={cellClass}>{day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Helper Cards */}
            <div className="space-y-4">
              
              {/* Recurring Timetable */}
              <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 flex items-center justify-between cursor-pointer hover:bg-indigo-50 transition">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Recurring timetable</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Mon-Fri use default weekly pattern</p>
                </div>
                <RefreshCw size={18} className="text-slate-400" />
              </div>

              {/* Exam Days */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Exam days</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Override schedule for exams</p>
                </div>
                <CalendarIcon size={18} className="text-slate-400" />
              </div>

              {/* Custom Templates */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Custom templates</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Save and reuse schedule presets</p>
                </div>
                <Folder size={18} className="text-slate-400" />
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}