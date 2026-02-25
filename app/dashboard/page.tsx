import { CommandHeader } from '@/components/dashboard/CommandHeader';
import { StatPanel } from '@/components/dashboard/StatPanel';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { ThreatMonitor } from '@/components/dashboard/ThreatMonitor';
import { IntelligenceChart } from '@/components/dashboard/IntelligenceChart';
import { OperationsMap } from '@/components/dashboard/OperationsMap';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-[#E5E7EB] font-sans relative">
      {/* Subtle CSS grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiLz48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHNlZWQ9IjE1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQmx1ciBzdGQ9IjEiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] bg-repeat"></div>
      
      <CommandHeader />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif uppercase text-center mb-8">Satcorp Tactical Concierge</h1>
        <p className="text-xl font-serif text-center mb-12 text-[#6B7280]">We Solve What Others Cannot.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatPanel />
          <ActivityFeed />
          <ThreatMonitor />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <IntelligenceChart />
          <OperationsMap />
        </div>
      </main>
    </div>
  );
}
