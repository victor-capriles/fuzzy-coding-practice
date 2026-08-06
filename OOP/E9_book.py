import collections
from random import choice

Book = collections.namedtuple("Book", ["title", "author"])
book = Book("Coding in Pain", "Victor")

print(book.title)
print(book.author)

class Library:
    def __init__(self):
        self._books = [
            Book("fluent in python", "Luciano R"),
            Book("refactoring", "Martin F"),
            Book("harry potter", "J.K")
        ]

    def __len__(self):
        return len(self._books)

    def __getitem__(self, position):
        return self._books[position]

library = Library()
print(len(library))
print(library[0])
print(library[1])
print(choice(library))

for bookie in library:
    print(bookie)

for bookies in reversed(library):
    print("Reversed order", bookies)

print(Book("fluent in python", "Luciano R") in library)