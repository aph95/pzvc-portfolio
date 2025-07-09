import { useState } from 'react';

interface FlowNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  type: 'start' | 'process' | 'decision' | 'end' | 'special';
  connections: string[];
  details?: string;
}

const GameFlowChart = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodes: FlowNode[] = [
    // Row 1 - Start
    { id: 'lobby', x: 400, y: 50, width: 160, height: 60, text: 'Matchmaking\nLobby', type: 'start', connections: ['roles', 'create', 'join'], details: 'Players enter the matchmaking system' },
    
    // Row 2 - Setup paths
    { id: 'roles', x: 200, y: 150, width: 120, height: 60, text: 'Role\nAssignment', type: 'process', connections: ['random'], details: 'Players are randomly assigned roles' },
    { id: 'create', x: 400, y: 150, width: 100, height: 60, text: 'Create\nRoom', type: 'process', connections: ['boundaries'], details: 'Host creates a new game room' },
    { id: 'join', x: 550, y: 150, width: 100, height: 60, text: 'Join\nRoom', type: 'process', connections: ['boundaries'], details: 'Player joins existing room' },
    
    // Row 3 - Role randomization and boundaries
    { id: 'random', x: 200, y: 250, width: 120, height: 60, text: 'Randomizing\nRoles', type: 'process', connections: ['human', 'zombie'], details: 'System assigns Human or Zombie roles' },
    { id: 'boundaries', x: 475, y: 250, width: 150, height: 60, text: 'Define\nBoundaries', type: 'decision', connections: ['auto', 'manual'], details: 'Set game area boundaries' },
    
    // Row 4 - Roles and boundary types
    { id: 'human', x: 120, y: 350, width: 80, height: 50, text: 'Human', type: 'process', connections: ['gamestart'], details: 'Player assigned as Human' },
    { id: 'zombie', x: 280, y: 350, width: 80, height: 50, text: 'Zombie', type: 'process', connections: ['gamestart'], details: 'Player assigned as Zombie' },
    { id: 'auto', x: 425, y: 350, width: 100, height: 50, text: 'Automatic', type: 'process', connections: ['gamestart'], details: 'GPS-based boundary detection' },
    { id: 'manual', x: 575, y: 350, width: 100, height: 50, text: 'Manual', type: 'process', connections: ['gamestart'], details: 'Host defines custom boundaries' },
    
    // Row 5 - Game start
    { id: 'gamestart', x: 350, y: 450, width: 160, height: 60, text: 'Game Timer\nBegins', type: 'special', connections: ['gameplay'], details: 'Game officially starts with timer' },
    
    // Row 6 - Main gameplay loop
    { id: 'gameplay', x: 350, y: 570, width: 160, height: 80, text: 'Active\nGameplay\nLoop', type: 'process', connections: ['attack', 'bounds', 'event'], details: 'Players actively participate in the game' },
    
    // Row 7 - Game mechanics
    { id: 'attack', x: 150, y: 700, width: 120, height: 60, text: 'Zombie\nAttack?', type: 'decision', connections: ['infected', 'stable'], details: 'Zombie attempts to infect human' },
    { id: 'bounds', x: 350, y: 700, width: 120, height: 60, text: 'Out of\nBounds?', type: 'decision', connections: ['exposed', 'continue'], details: 'Player crosses boundary line' },
    { id: 'event', x: 550, y: 700, width: 120, height: 60, text: 'Special\nEvent?', type: 'decision', connections: ['clue', 'continue'], details: 'Random event trigger' },
    
    // Row 8 - Consequences
    { id: 'infected', x: 50, y: 820, width: 100, height: 60, text: 'Health\nDepletes', type: 'process', connections: ['antidote'], details: 'Player loses health over time' },
    { id: 'stable', x: 200, y: 820, width: 100, height: 60, text: 'Health\nStable', type: 'process', connections: ['wincondition'], details: 'Player maintains current health' },
    { id: 'exposed', x: 320, y: 820, width: 100, height: 60, text: 'Location\nExposed', type: 'process', connections: ['return'], details: 'Zombies can see player location' },
    { id: 'continue', x: 450, y: 820, width: 100, height: 60, text: 'Continue\nNormally', type: 'process', connections: ['wincondition'], details: 'Game continues without penalty' },
    { id: 'clue', x: 580, y: 820, width: 100, height: 60, text: 'Random\nClue', type: 'special', connections: ['wincondition'], details: 'Human location revealed to zombies' },
    
    // Row 9 - Further consequences
    { id: 'antidote', x: 50, y: 940, width: 100, height: 60, text: 'Found\nAntidote?', type: 'decision', connections: ['healed', 'death'], details: 'Player searches for healing item' },
    { id: 'return', x: 320, y: 940, width: 100, height: 60, text: 'Return in\n30 sec?', type: 'decision', connections: ['stealth', 'vulnerable'], details: 'Player has limited time to return' },
    
    // Row 10 - Final consequences
    { id: 'healed', x: 20, y: 1060, width: 80, height: 50, text: 'Health\nRestored', type: 'process', connections: ['wincondition'], details: 'Player recovers full health' },
    { id: 'death', x: 120, y: 1060, width: 80, height: 50, text: 'Death', type: 'end', connections: ['wincondition'], details: 'Player eliminated from game' },
    { id: 'stealth', x: 290, y: 1060, width: 80, height: 50, text: 'Stealth\nRestored', type: 'process', connections: ['wincondition'], details: 'Player becomes hidden again' },
    { id: 'vulnerable', x: 390, y: 1060, width: 80, height: 50, text: 'Remain\nVulnerable', type: 'process', connections: ['wincondition'], details: 'Player stays exposed to zombies' },
    
    // Win condition check
    { id: 'wincondition', x: 350, y: 1180, width: 160, height: 80, text: 'Check Win\nConditions', type: 'decision', connections: ['zombiewin', 'humanwin', 'timeup', 'gameplay'], details: 'Evaluate if game should end' },
    
    // End states
    { id: 'zombiewin', x: 150, y: 1320, width: 120, height: 60, text: 'Zombies\nWin', type: 'end', connections: ['replay'], details: 'All humans infected or dead' },
    { id: 'humanwin', x: 350, y: 1320, width: 120, height: 60, text: 'Humans\nWin', type: 'end', connections: ['replay'], details: 'Humans survive or no zombies left' },
    { id: 'timeup', x: 550, y: 1320, width: 120, height: 60, text: 'Time Up\nHumans Win', type: 'end', connections: ['replay'], details: 'Timer expires with survivors' },
    
    // Replay
    { id: 'replay', x: 350, y: 1440, width: 120, height: 60, text: 'Replay?', type: 'decision', connections: ['lobby'], details: 'Option to start new game' }
  ];

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'start': return 'hsl(var(--primary))';
      case 'process': return 'hsl(var(--muted))';
      case 'decision': return 'hsl(var(--accent))';
      case 'end': return 'hsl(var(--destructive))';
      case 'special': return 'hsl(var(--secondary))';
      default: return 'hsl(var(--muted))';
    }
  };

  const getConnections = (fromNode: FlowNode) => {
    return fromNode.connections.map(toNodeId => {
      const toNode = nodes.find(n => n.id === toNodeId);
      if (!toNode) return null;
      
      const fromCenterX = fromNode.x + fromNode.width / 2;
      const fromCenterY = fromNode.y + fromNode.height / 2;
      const toCenterX = toNode.x + toNode.width / 2;
      const toCenterY = toNode.y + toNode.height / 2;
      
      // Calculate connection points on node edges
      let fromX, fromY, toX, toY;
      
      if (Math.abs(toCenterX - fromCenterX) > Math.abs(toCenterY - fromCenterY)) {
        // Horizontal connection
        if (toCenterX > fromCenterX) {
          fromX = fromNode.x + fromNode.width;
          fromY = fromCenterY;
          toX = toNode.x;
          toY = toCenterY;
        } else {
          fromX = fromNode.x;
          fromY = fromCenterY;
          toX = toNode.x + toNode.width;
          toY = toCenterY;
        }
      } else {
        // Vertical connection
        if (toCenterY > fromCenterY) {
          fromX = fromCenterX;
          fromY = fromNode.y + fromNode.height;
          toX = toCenterX;
          toY = toNode.y;
        } else {
          fromX = fromCenterX;
          fromY = fromNode.y;
          toX = toCenterX;
          toY = toNode.y + toNode.height;
        }
      }
      
      return (
        <g key={`${fromNode.id}-${toNodeId}`}>
          <line
            x1={fromX}
            y1={fromY}
            x2={toX}
            y2={toY}
            stroke="hsl(var(--border))"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        </g>
      );
    }).filter(Boolean);
  };

  return (
    <div className="w-full bg-card rounded-lg border border-border p-6">
      <h3 className="text-xl font-bold text-foreground mb-4">Patient Zero - Interactive Game Flow</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Hover over nodes to see details. Click to highlight paths.
      </p>
      
      <div className="overflow-x-auto">
        <svg
          width="800"
          height="1520"
          viewBox="0 0 800 1520"
          className="w-full h-auto max-h-[80vh] border border-border/50 rounded bg-background/50"
        >
          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="hsl(var(--border))"
              />
            </marker>
          </defs>
          
          {/* Render connections first (behind nodes) */}
          {nodes.map(node => getConnections(node))}
          
          {/* Render nodes */}
          {nodes.map(node => {
            const isHovered = hoveredNode === node.id;
            const isSelected = selectedNode === node.id;
            
            return (
              <g key={node.id}>
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.width}
                  height={node.height}
                  fill={getNodeColor(node.type)}
                  stroke={isHovered || isSelected ? 'hsl(var(--primary))' : 'hsl(var(--border))'}
                  strokeWidth={isHovered || isSelected ? 3 : 1}
                  rx="8"
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                />
                <text
                  x={node.x + node.width / 2}
                  y={node.y + node.height / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="hsl(var(--foreground))"
                  fontSize="12"
                  fontWeight="600"
                  className="pointer-events-none select-none"
                >
                  {node.text.split('\n').map((line, i) => (
                    <tspan key={i} x={node.x + node.width / 2} dy={i === 0 ? 0 : 14}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Node details */}
      {(hoveredNode || selectedNode) && (
        <div className="mt-4 p-4 bg-accent/50 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">
            {nodes.find(n => n.id === (hoveredNode || selectedNode))?.text.replace('\n', ' ')}
          </h4>
          <p className="text-sm text-muted-foreground">
            {nodes.find(n => n.id === (hoveredNode || selectedNode))?.details}
          </p>
        </div>
      )}
      
      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
          <span className="text-muted-foreground">Start</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--muted))' }}></div>
          <span className="text-muted-foreground">Process</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
          <span className="text-muted-foreground">Decision</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--secondary))' }}></div>
          <span className="text-muted-foreground">Special Event</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: 'hsl(var(--destructive))' }}></div>
          <span className="text-muted-foreground">End State</span>
        </div>
      </div>
    </div>
  );
};

export default GameFlowChart;