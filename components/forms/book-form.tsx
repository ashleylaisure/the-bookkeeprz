'use client'
import { useBook, useCreateBook, useUpdateBook } from '@/actions/book.action'
import useBookStore from '@/lib/store/useBookStore'
import { bookDefaultValues, bookSchema, BookSchema } from '@/types/schema/bookSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import React, { useEffect } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Check, ChevronsUpDown, Plus } from 'lucide-react'
import { ControlledInput } from '../ui/controlled/controlled-input'
import { ControlledTextarea } from '../ui/controlled/controlled-textarea'
import { LoadingButton } from '../loading-button'
import { Resolver, useForm } from 'react-hook-form'
import { ControlledSelect } from '../ui/controlled/controlled-select'
import { BOOK_FORMATS, BOOK_GENRES, BOOK_STATUSES } from '@/constants'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '@/lib/utils'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { ControlledDatePicker } from '../ui/controlled/controlled-datepicker'

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
  // TODO: disable if bookshelf dialog is open
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
            {/* <ControlledSelect<BookSchema>
              name="genre"
              label="Genre"
              options={BOOK_GENRES}
              placeholder="Select Genre"
            /> */}

            {/* GENRE */}
            <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Genre</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            "w-full justify-between",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value
                                            ? BOOK_GENRES.find(
                                                (genre) => genre.value === field.value
                                            )?.label
                                        : "Select genre"}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>

                            <PopoverContent className="w-full p-0" >
                                <Command>
                                    <CommandInput placeholder="Search genre..." className="h-9"/>
                                    <CommandList>
                                        <CommandEmpty>No Genre found</CommandEmpty>
                                        <CommandGroup>
                                            {BOOK_GENRES.map((genre) => (
                                                <CommandItem 
                                                    key={genre.value} 
                                                    value={genre.value}
                                                    onSelect={() => {
                                                        form.setValue("genre", genre.value)
                                                    }}
                                                >
                                                    {genre.label}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            genre.value === field.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                </FormItem>
                )}
            />

            <ControlledInput<BookSchema>
              name="coverImage"
              label="Cover Image URL"
              placeholder="Cover Image URL"
            />
            <ControlledSelect<BookSchema>
              name="format"
              label="Format"
              options={BOOK_FORMATS}
              placeholder="Select Format"
            />
            <ControlledSelect<BookSchema>
              name="status"
              label="Status"
              options={BOOK_STATUSES}
            />
            <ControlledDatePicker<BookSchema>
              name="dateStarted"
              label="Date Started"
            />
            <ControlledDatePicker<BookSchema>
              name="dateFinished"
              label="Date Finished"
            />
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