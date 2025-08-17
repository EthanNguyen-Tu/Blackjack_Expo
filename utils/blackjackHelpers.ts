import { HandOfCards } from "@/models/HandOfCards";
import { VisibilityHandOfCards } from "@/models/VisibilityHandOfCards";

export function clearCards(dealerHand: VisibilityHandOfCards, playerHand: HandOfCards) {
    dealerHand.clear();
    playerHand.clear();
}

export function checkPlayerVictory(playerValue: number, dealerValue: number): boolean {
    return dealerValue > 21 || (playerValue <= 21 && playerValue > dealerValue);
}

export function checkDealerDraws(dealerValue: number, soft17: boolean, hasAce: boolean): boolean {
    return soft17 && hasAce ? dealerValue <= 17 : dealerValue < 17;
}
