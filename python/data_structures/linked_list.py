class Node:
    """
    Node class
    """

    def __init__(self, value, next=None):
        """
        Creates a Node instance
        """
        self.value = value
        self.next = next

    def __str__(self):
        """
        Prints data of the Node
        """
        return str(self.value)

    def __repr__(self):
        return f'<Node: Value = { self.value } | Next = { self.next }>'

    class LinkedList:
        """
        Linked List class
        """

    def __init__(self, head=None):
        """
        Creates an instance of a Linked List
        """
        self.head = head

    def __str__(self):
        """
        Prints data of the Linked List
        """

        string = ""

        current = self.head

        while current is not None:
            string += f"{ {current.value} } -> "
            current = current.next

        string += f" None "
        return string

class TargetError:
    pass
