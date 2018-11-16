### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out static testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

#there is no initialize method on this class, but the self method below may require an object to have been initialized?

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #dif should be 'def' in order for it to be recognised as a function. There is also a comma missing between card1 and card2.
  if card1.value > card2.value #the card values could be the same ie 10 of hearts and 10 of spades so this function needs to be edited to become an elsif to cover the option of the card values matching.
    return card.name #this will not work as 'card' has not been defined. And .name is not a method for the card class. It should be 'return card1.suit' or it should just return card1 as  you will want to know the suit and the number. This is also consistent with the else returning card2 rather than card2.name/suit.
  else
    card2
  end
end
end #this end is not required.

def self.cards_total(cards)#if the CardGame has an initialize method then you wouldn't need to input anything into the method here as it
  total #currently 'total' has not been defined so it is likely this will cause a fail when the function tries to add the card.value to it. It needs to be total = 0.
  for card in cards
    total += card.value
    return "You have a total of" + total #this line should be returned after the end of the 'for' loop. I would also use string interpolation here to make testing easier.
  end  
end


```
