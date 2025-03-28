
import React, { useState, useEffect } from 'react';
import { Card } from '@/data/quizData';
import QuizCard from './QuizCard';
import { DndContext, DragEndEvent, DragStartEvent, DragOverlay, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableCardProps {
  card: Card;
}

const SortableCard: React.FC<SortableCardProps> = ({ card }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      className="mb-3"
    >
      <QuizCard card={card} isDragging={isDragging} />
    </div>
  );
};

interface DraggableCardListProps {
  cards: Card[];
  onSort: (sortedCards: Card[]) => void;
}

const DraggableCardList: React.FC<DraggableCardListProps> = ({ cards, onSort }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [items, setItems] = useState<Card[]>(cards);
  
  // Add useEffect to update items when cards prop changes
  useEffect(() => {
    setItems(cards);
  }, [cards]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        const newItems = arrayMove(items, oldIndex, newIndex);
        onSort(newItems);
        return newItems;
      });
    }
    
    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map(card => card.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-4">
          {items.map((card) => (
            <SortableCard key={card.id} card={card} />
          ))}
        </div>
      </SortableContext>
      
      <DragOverlay>
        {activeId ? (
          <div className="w-full animate-pulse">
            <QuizCard 
              card={items.find(card => card.id === activeId)!} 
              isDragging={true} 
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggableCardList;
