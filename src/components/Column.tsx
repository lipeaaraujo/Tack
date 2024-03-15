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

    setCards((prevCards : CardType[]) => {
      const newCards = [...prevCards];
      sortedCards.forEach((sortedCard : CardType, newIndex : number) => {
        const foundCard = newCards.find(card => card.id === sortedCard.id);
        if (foundCard) {
          foundCard.index = newIndex;
          foundCard.columnId = columnId;
        }
      })
      return newCards;
    });

  }
  
  return (
    <div className="bg-neutral-900 w-72 p-4 rounded-xl h-fit">
      <h3>{name}</h3>

      <ReactSortable
        list={cards}
        setList={cards => setColumnCards(cards, id)}
        group="cards"
        className="h-full"
        ghostClass="opacity-40"
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