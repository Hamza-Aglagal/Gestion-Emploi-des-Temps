<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeanceTemporaire extends Model
{
    use HasFactory;

    protected $fillable = ['date_id', 'professeur_id', 'salle_id', 'groupe_ids', 'jour'];


    public function groupes()
    {
        return $this->belongsTo(Groupe::class, 'groupe_id');
    }

    public function dateHeurs()
    {
        return $this->belongsTo(DateHeur::class, 'date_id');
    }

    public function salle()
    {
        return $this->belongsTo(Salle::class, 'salle_id');
    }

    
}
