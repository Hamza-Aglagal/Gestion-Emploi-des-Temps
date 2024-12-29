<?php

namespace App\Http\Controllers;

use App\Models\Salle;
use App\Models\Seance;
use Carbon\Carbon;
use App\Models\Professeur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class ProfesseurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $professeur = Professeur::all();
        return $professeur ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required|unique:professeurs',
            'numero' => 'required',
            'password' => 'required',
        ]);
    
    
        $professeur = Professeur::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'numero' => $request->numero,
            'password' => Hash::make($request->password)
        ]);
    
        return "created successfully.." ;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Professeur  $professeur
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $professeur = Professeur::find($id);

        if ($professeur === null) {
            return response()->json([
                'message' => 'Professeur introuvable',
            ], 404);
        }else{
            
        }
    
        return $professeur;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Professeur  $professeur
     * @return \Illuminate\Http\Response
     */
    public function edit(Professeur $professeur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Professeur  $professeur
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Professeur $professeur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Professeur  $professeur
     * @return \Illuminate\Http\Response
     */
    public function AllProfActive()
    {
        $desiredTimeZone = 'Africa/Casablanca';
        config(['app.timezone' => $desiredTimeZone]);
    
        $currentDay = Carbon::now()->setTimezone($desiredTimeZone)->locale('fr');
        $dayName = $currentDay->translatedFormat('l');
    
        $currentTime = $currentDay->format('H:i:s');
    
        // $currentTime = '14:33:09' ;

        $salleId = 1; 

        $seancesEnligne = Seance::whereHas('dateHeurs', function ($query) use ($currentTime) {
            $query->where('heur_debut', '<=', $currentTime)
                  ->where('heur_fin', '>=', $currentTime);
        })->where('jour', $dayName)
        //   ->whereHas('salle', function ($query) use ($salleId) {
        //       $query->where('id', $salleId);
        //   })
          ->with(['professeur', 'salle', 'dateHeurs'])
          ->get();
    
        $profEnLigne = $seancesEnligne->map(function ($seance) {
            return [
                'professeur' => $seance->professeur,
                'salle' => $seance->salle,
            ];
        });
    
        $allProf = Professeur::get();
    
        $profNonEnLigne = $allProf->diff($profEnLigne->pluck('professeur'));
    
        $profNonEnLigne = $profNonEnLigne->map(function ($professeur) use ($salleId) {
            return [
                'professeur' => $professeur,
                'salle' => Salle::find($salleId), 
            ];
        });
    
        return [
            'prof_en_ligne' => $profEnLigne->all(),
            'prof_non_en_ligne' => $profNonEnLigne->all(),
        ];
    }
    
    



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Professeur  $professeur
     * @return \Illuminate\Http\Response
     */
    public function destroy(Professeur $professeur)
    {
        $professeur->delete();

        return response()->json([
            'message' => 'Professeur removed successfully ',
        ]);
    }
}
