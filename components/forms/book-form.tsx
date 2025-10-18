'use client'
import { useBook, useCreateBook, useUpdateBook } from '@/actions/book.action'
import useBookStore from '@/lib/store/useBookStore'
import { bookDefaultValues, bookSchema, BookSchema } from '@/types/schema/bookSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import React, { useEffect } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { ControlledInput } from '../ui/controlled/controlled-input'
import { ControlledTextarea } from '../ui/controlled/controlled-textarea'
import { LoadingButton } from '../loading-button'
import { Resolver, useForm } from 'react-hook-form'

const BookForm = ({ smallTrigger }: { smallTrigger?: boolean }) => {

  const form = useForm<BookSchema>({
    resolver: zodResolver(bookSchema) as Resolver<BookSchema>,
    defaultValues: bookDefaultValues,
  })

  const { 
    selectedBookId, 
    setSelectedBookId, 
    bookDialogOpen,
    setBookDialogOpen 
  } = useBookStore();
  // const {bookshelfDialogOpen, setBookshelfDialogOpen} = useBookshelfStore();

  const bookQuery = useBook();
  // TODO: query bookshelfs for selection
  const createBook = useCreateBook();
  const updateBook = useUpdateBook();

  const isLoading = createBook.isPending || updateBook.isPending;
  // const isDisabled = bookshelfDialogOpen;

  const handleDialogChange = (open: boolean) => {
    setBookDialogOpen(open);
    if (!open) {
      setSelectedBookId(null);
      form.reset(bookDefaultValues);
    }
  }

  useEffect(() => {
    if (!!selectedBookId && bookQuery.data) {
      form.reset(bookQuery.data);
    }
  }, [selectedBookId, bookQuery.data, form]);

  async function onSubmit(data: BookSchema) {
    const mutation = data.action === 'create' ? createBook : updateBook;

    mutation.mutate(data, {
      onSuccess: () => handleDialogChange(false),
      onError: (error) => {
        console.error('Error submitting book form:', error);
        toast.error('There was an error submitting the Book Form. Please try again.');
      }
    })
  }

  return (
    <Dialog open={bookDialogOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        {smallTrigger ? (
          <Button size="icon" variant="ghost" type="button">
            <Plus />
          </Button>
        ) : (
          <Button>
            <Plus className="mr-2" />
            Add A Book
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedBookId ? 'Edit Book' : 'Add Book'}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            
            <ControlledInput<BookSchema>
              name="title"
              label="Title"
              placeholder="Book Title"
            />
            <ControlledInput<BookSchema>
              name="author"
              label="Author"
              placeholder="Book Author"
            />
            <ControlledTextarea<BookSchema>
              name="description"
              label="Description"
              placeholder="Book Description"
              className="col-span-2"
            />
            <ControlledInput<BookSchema>
              name="totalPages"
              label="Total Pages"
              type="number"
              placeholder="Total Pages"
            />
            <p>Genre Select placeholder</p>
            <ControlledInput<BookSchema>
              name="coverImage"
              label="Cover Image URL"
              placeholder="Cover Image URL"
            />
            <p>Format Select placeholder</p>
            <p>Status Select placeholder</p>
            <p>Date Select placeholder</p>
            <p>Date finished placeholder</p>
            <LoadingButton
              type="submit"
              loading={isLoading}
              loadingText="Saving..."
              className="min-h-12 w-full cursor-pointer"
            >
              {!!selectedBookId
                ? "Edit Book"
                : "Add Book"}
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>

    </Dialog>
  )
}

export default BookForm