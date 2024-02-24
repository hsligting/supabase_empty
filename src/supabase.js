
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vgxexytdvhdihfjhssve.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZneGV4eXRkdmhkaWhmamhzc3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MTYwODAsImV4cCI6MjAyNDM5MjA4MH0.glxFdbR-8ZP4R7pt317IIv6L4rXW2cXkUdN7lhdU6vU"
export const supabase = createClient(supabaseUrl, supabaseKey)