import { ReactSortable } from "react-sortablejs";
import { CardType } from "./Board";
import { SetStateAction } from "react";

type ColumnProps = {
  id: string;
  name: string;
  cards: CardType[];
  setCards: SetStateAction<any>;
}

export default function Column({ id, name, cards, setCards }: ColumnProps) {
  
  const setColumnCards = (sortedCards: CardType[], columnId: string) => {
    const sortedCardsIds = sortedCards.map(card => card.id);
    setCards((prevCards : CardType[]) => {
      const newCards = [...prevCards];
      newCards.forEach(newCard => {
        if (sortedCardsIds.includes(newCard.id)) {
          newCard.columnId = columnId;
        }
      });
      return newCards;
    });
  }
  
  return (
    <div className="bg-neutral-900 w-72 p-4 rounded-xl">
      <h3>{name}</h3>

      <ReactSortable
        list={cards}
        setList={cards => setColumnCards(cards, id)}
        group="cards"
      >
        {cards.map(card => (
          <div className="my-2 bg-neutral-800 p-3 rounded-xl" key={card.id}>
            <span>{card.title}</span>
          </div>
        ))}
      </ReactSortable>

    </div>
  )
}