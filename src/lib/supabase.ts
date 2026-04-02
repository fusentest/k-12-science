
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqnzlhqsszbpnkvpgkui.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxbnpsaHFzc3picG5rdnBna3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMjM3MzEsImV4cCI6MjA5MDY5OTczMX0.C-CMMsoaZ6j9r-ZYbiugq7-oEE9hdUZOTkjL5TUuX1g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);