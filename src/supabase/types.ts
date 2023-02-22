export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Cases: {
        Row: {
          alleged: string;
          alleged_Role: string;
          case_type: string;
          constituency: string;
          county: string;
          created_at: string | null;
          describtion: string;
          flaggerId: string;
          id: string;
          image: string;
          seconders: string[];
          status: string;
          title: string;
          updated_at: string | null;
          validity: number;
        };
        Insert: {
          alleged: string;
          alleged_Role: string;
          case_type: string;
          constituency: string;
          county: string;
          created_at?: string | null;
          describtion: string;
          flaggerId: string;
          id?: string;
          image: string;
          seconders: string[];
          status: string;
          title: string;
          updated_at?: string | null;
          validity?: number;
        };
        Update: {
          alleged?: string;
          alleged_Role?: string;
          case_type?: string;
          constituency?: string;
          county?: string;
          created_at?: string | null;
          describtion?: string;
          flaggerId?: string;
          id?: string;
          image?: string;
          seconders?: string[];
          status?: string;
          title?: string;
          updated_at?: string | null;
          validity?: number;
        };
      };
      Flaggers: {
        Row: {
          code: number;
          constituency: string;
          county: string;
          id: string;
          password: string;
        };
        Insert: {
          code: number;
          constituency: string;
          county: string;
          id?: string;
          password: string;
        };
        Update: {
          code?: number;
          constituency?: string;
          county?: string;
          id?: string;
          password?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
