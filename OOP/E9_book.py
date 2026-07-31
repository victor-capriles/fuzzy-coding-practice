import collections

Book = collections.namedtuple("Book", ["title", "author"])
book = Book("Coding in Pain", "Victor")

print(book.title)
print(book.author)

class Library:
    def __innit__(self):
        self._books = [
            Book("fluent in python", "Luciano R"),
            Book("refactoring", "Martin F")
        ]

    def __len__(self):
        return len(self._books)

    def __getitem__(self, position):
        return self._books[position]