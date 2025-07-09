import { useState } from 'react';
import { Users, Play, Skull, Heart, MapPin, Trophy, RotateCcw, Zap, ChevronDown, ChevronRight } from 'lucide-react';

interface FlowNode {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  details: string[];
  position: { x: number; y: number };
  color: string;
  connections: string[];
}

const InteractiveGameFlow = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const flowNodes: FlowNode[] = [
    {
      id: 'matchmaking',
      title: 'Matchmaking & Lobby',
      icon: Users,
      description: 'Players enter lobby and get assigned roles',
      details: [
        'Players enter matchmaking lobby',
        'Random role assignment: Human or Zombie',
        'Create Room or Join Room options',
        'Define game boundaries (Auto/Manual)'
      ],
      position: { x: 20, y: 10 },
      color: 'bg-blue-500',
      connections: ['gamestart']
    },
    {
      id: 'gamestart',
      title: 'Game Start',
      icon: Play,
      description: 'Initialize game parameters and begin',
      details: [
        'Boundaries and game time are defined',
        'Game timer begins',
        'All players are notified of start'
      ],
      position: { x: 20, y: 30 },
      color: 'bg-green-500',
      connections: ['zombie', 'human']
    },
    {
      id: 'zombie',
      title: 'Zombie Mechanics',
      icon: Skull,
      description: 'Zombie attack and infection system',
      details: [
        'Zombies attempt to infect humans',
        'Upon attack:',
        '→ Recently infected: health depletes gradually',
        '→ Not infected (30s+): health stable/replenishes'
      ],
      position: { x: 5, y: 50 },
      color: 'bg-red-500',
      connections: ['human', 'boundaries']
    },
    {
      id: 'human',
      title: 'Human Health System',
      icon: Heart,
      description: 'Human survival and health mechanics',
      details: [
        'Infected humans: health depletes',
        'If antidote found → health replenishes',
        'If no antidote → may die',
        'Uninfected → health remains stable'
      ],
      position: { x: 35, y: 50 },
      color: 'bg-pink-500',
      connections: ['boundaries', 'winconditions']
    },
    {
      id: 'boundaries',
      title: 'Boundary Rules',
      icon: MapPin,
      description: 'Out-of-bounds consequence system',
      details: [
        'Out of bounds → location exposed to zombies',
        'Return within 30s → stealth restored',
        'Otherwise → vulnerability remains',
        'Temporary exposure mechanic'
      ],
      position: { x: 20, y: 70 },
      color: 'bg-orange-500',
      connections: ['winconditions', 'events']
    },
    {
      id: 'winconditions',
      title: 'Win Conditions',
      icon: Trophy,
      description: 'Game ending scenarios',
      details: [
        'All humans infected/dead → Zombies win',
        'Timer runs out + humans alive → Humans win',
        'No zombies remain → Humans win'
      ],
      position: { x: 35, y: 85 },
      color: 'bg-yellow-500',
      connections: ['replay']
    },
    {
      id: 'events',
      title: 'Event Triggers',
      icon: Zap,
      description: 'Special random events during gameplay',
      details: [
        'Temporary clue reveals random human location',
        'Event triggers randomly during game',
        'Adds strategic complexity',
        'Time-limited information advantage'
      ],
      position: { x: 5, y: 85 },
      color: 'bg-purple-500',
      connections: ['winconditions']
    },
    {
      id: 'replay',
      title: 'Replay Option',
      icon: RotateCcw,
      description: 'Post-game replay prompt',
      details: [
        'Game ends with statistics',
        'Option to replay with same/different settings',
        'Return to matchmaking lobby',
        'Share game results'
      ],
      position: { x: 20, y: 100 },
      color: 'bg-indigo-500',
      connections: ['matchmaking']
    }
  ];

  const getConnectionPath = (from: FlowNode, to: FlowNode) => {
    const fromX = from.position.x + 10;
    const fromY = from.position.y + 5;
    const toX = to.position.x + 10;
    const toY = to.position.y + 5;
    
    return `M ${fromX} ${fromY} Q ${(fromX + toX) / 2} ${(fromY + toY) / 2 - 5} ${toX} ${toY}`;
  };

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  return (
    <div className="bg-accent/30 rounded-lg p-6">
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
          🧠 Patient Zero – Interactive Game Flow
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Click on nodes to explore the phygital infection-based experience. Hover to see connections.
        </p>
      </div>

      {/* Interactive Flowchart */}
      <div className="relative bg-background/50 rounded-lg p-8 min-h-[600px] overflow-x-auto">
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          style={{ minWidth: '800px', minHeight: '600px' }}
        >
          {/* Connection Lines */}
          {flowNodes.map(node => 
            node.connections.map(connectionId => {
              const targetNode = flowNodes.find(n => n.id === connectionId);
              if (!targetNode) return null;
              
              const isHighlighted = hoveredNode === node.id || hoveredNode === connectionId;
              
              return (
                <path
                  key={`${node.id}-${connectionId}`}
                  d={getConnectionPath(node, targetNode)}
                  stroke={isHighlighted ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                  strokeWidth={isHighlighted ? "3" : "2"}
                  fill="none"
                  opacity={isHighlighted ? "0.8" : "0.4"}
                  markerEnd="url(#arrowhead)"
                  className="transition-all duration-300"
                />
              );
            })
          )}
          
          {/* Arrow marker */}
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
                fill="hsl(var(--muted-foreground))"
                opacity="0.6"
              />
            </marker>
          </defs>
        </svg>

        {/* Flow Nodes */}
        <div className="relative" style={{ minWidth: '800px', minHeight: '600px' }}>
          {flowNodes.map(node => {
            const IconComponent = node.icon;
            const isSelected = selectedNode === node.id;
            const isHovered = hoveredNode === node.id;
            
            return (
              <div
                key={node.id}
                className={`absolute cursor-pointer transition-all duration-300 ${
                  isHovered ? 'scale-110 z-20' : 'z-10'
                } ${isSelected ? 'scale-105' : ''}`}
                style={{ 
                  left: `${node.position.x}%`, 
                  top: `${node.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => handleNodeClick(node.id)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Node Circle */}
                <div className={`
                  w-20 h-20 rounded-full ${node.color} flex items-center justify-center
                  shadow-lg hover:shadow-xl transition-all duration-300
                  ${isSelected ? 'ring-4 ring-primary/50' : ''}
                  ${isHovered ? 'shadow-2xl' : ''}
                `}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                {/* Node Label */}
                <div className="mt-2 text-center">
                  <p className="text-xs font-medium text-foreground max-w-24 mx-auto leading-tight">
                    {node.title}
                  </p>
                </div>

                {/* Tooltip on Hover */}
                {isHovered && !isSelected && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full 
                                bg-popover border border-border rounded-lg px-3 py-2 shadow-lg z-30 min-w-48">
                    <p className="text-sm font-medium text-popover-foreground mb-1">{node.title}</p>
                    <p className="text-xs text-muted-foreground">{node.description}</p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 
                                  bg-popover border-r border-b border-border rotate-45"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed View */}
      {selectedNode && (
        <div className="mt-6 notion-card p-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {(() => {
                const node = flowNodes.find(n => n.id === selectedNode);
                if (!node) return null;
                const IconComponent = node.icon;
                return (
                  <>
                    <div className={`w-10 h-10 rounded-full ${node.color} flex items-center justify-center`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h5 className="text-lg font-semibold text-foreground">{node.title}</h5>
                  </>
                );
              })()}
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-2">
            {flowNodes.find(n => n.id === selectedNode)?.details.map((detail, index) => (
              <div key={index} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>

          {/* Connected Nodes */}
          {(() => {
            const currentNode = flowNodes.find(n => n.id === selectedNode);
            const connectedNodes = currentNode?.connections.map(id => 
              flowNodes.find(n => n.id === id)
            ).filter(Boolean) || [];
            
            if (connectedNodes.length === 0) return null;
            
            return (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground mb-2">CONNECTS TO:</p>
                <div className="flex flex-wrap gap-2">
                  {connectedNodes.map(node => (
                    <button
                      key={node?.id}
                      onClick={() => setSelectedNode(node?.id || null)}
                      className="px-3 py-1 bg-accent hover:bg-accent/80 text-accent-foreground 
                               text-xs rounded-full transition-colors duration-200 flex items-center gap-1"
                    >
                      {(() => {
                        if (!node) return null;
                        const IconComponent = node.icon;
                        return <IconComponent className="h-3 w-3" />;
                      })()}
                      {node?.title}
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <div className="mt-4 text-xs text-muted-foreground text-center">
        💡 This interactive flow demonstrates the core mechanics of Patient Zero's phygital gameplay system
      </div>
    </div>
  );
};

export default InteractiveGameFlow;