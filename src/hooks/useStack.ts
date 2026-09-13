import { useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";

export function useStack() {
  const [stack, setStack] = useState<Technology[]>([]); //I created a state named `stack` with an initial value of an empty list ([]). However, the condition is that, in the future, only data in the 'Technology' format can be stored within it—nothing else.

  function isInStack(id: string) {
    return stack.some((item) => item.id === id);
  }

  // Jodi isInStack true hoy tahole already stack e aache noyto setStack dara aager golor sathe add korte hobe. And show a success toast
  function addToStack(tech: Technology) {
    if (isInStack(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  // Jegolo sorto milbe na sodho segolo setStack e set hobe ba bolajay jei id ta bad dite chacci seta chara sorto onojayee mil nei kon golo segolo set hoy UI update kore dibe
  function removeFromStack(tech: Technology) {
    setStack(stack.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  }

  function removeAll() {
    if (stack.length === 0) return; // jodi already khali thake tahole just void return korebe mane kono kicu e korbe na
    setStack([]); // Empty kore dibe stack 
    toast.info("Your stack has been cleared.");
  }

  return { stack, isInStack, addToStack, removeFromStack, removeAll };
}
