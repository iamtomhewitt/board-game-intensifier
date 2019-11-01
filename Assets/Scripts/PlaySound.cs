using UnityEngine;
using System.Collections;

public class PlaySound : MonoBehaviour 
{
	GameObject[] buttons;

	void Start()
	{
		buttons = GameObject.FindGameObjectsWithTag ("Button");
	}

	void Update ()
	{
		if (Input.GetKeyDown (KeyCode.Escape)) 
		{
			Application.Quit();
		}
	}

    void OnMouseDown()
    {
		for (int i = 0; i < buttons.Length; i++) 
		{
			if (this.gameObject == buttons[i])
			{
				GetComponent<AudioSource> ().Play ();
			} 
			else 
			{
				buttons [i].GetComponent<AudioSource> ().Stop ();
			}
		}
    }
}
