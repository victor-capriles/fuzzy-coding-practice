import collections

# define what a single card looks like
# namedtuple to build classes of objects
Card = collections.namedtuple('Card', ['rank', 'suit'])

# card ranks
suit_values = dict(spades=3, hearts=2, diamonds=1, clubs=0)

# class to define what a deck is
class FrenchDeck:
    # create al possible card ranks; convert numbers to strings 
    # and then list JQKA
    ranks = [str(n) for n in range(2, 11)] + list('JQKA')
    # take this string and split it wherever there's a whitespace
    suits = 'spades diamonds clubs hearts'.split()

    # when a new french deck is created, create a list of
    # all cards and store it inside this deck
    def __init__(self):
        # for each suit, for each rank
        # create a Card(rank, suit) and append it
        # to the empty list
        self._cards = []
        for suit in self.suits:
            for rank in self.ranks:
                card = Card(rank, suit)
                self._cards.append(card)
    
    def __len__(self):
        # return how many cards this deck contain
        return len(self._cards)
    
    def __getitem__(self, position):
        # return the card at the requested position in the deck
        return self._cards[position]

    
    def spades_high(card):
        rank_value = FrenchDeck.ranks.index(card.rank)
        return rank_value * len(suit_values) + suit_values[card.suit]

    
    
deck = FrenchDeck()
print(len(deck))
print(deck[0])

for card in sorted(deck, key=FrenchDeck.spades_high):
    print(card)