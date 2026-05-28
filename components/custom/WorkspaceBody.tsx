"use client";
import React, { useEffect } from "react";
import { useContext } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Link } from "lucide-react";
import EmptyWorkspace from "./EmptyWorkspace";
import axios from "axios";
import { useRouter } from "next/navigation";

function WorkspaceBody() {


  const { userDetails } = useContext(UserDetailContext);

  const router = useRouter();

  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  useEffect(() => {
    GetGithubToken();
  }, []);

  const GetGithubToken = async () => {
    const result = await axios.get("/api/github/token");
    console.log("Github Access Token:", result.data.accessToken);
  }

  const onAddRepo = async () => {
    router.push("/api/github");
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-medium">Workspace</h2>
        <h2 className="text-blue-800 bg-blue-100 px-2 rounded-lg">
          Remaining Credits: {userDetails?.credits}
        </h2>
      </div>

      <Card className="mt-5 flex justify-between items-center p-4 border rounded-lg">
        <div className="flex items-center gap-5">
          <Image src="/github.png" alt="GitHub" width={40} height={40} />
          <h2 className="text-lg">Connect Github & Add Repository</h2>
        </div>
        <div>
          {!accessToken ? (
            <Button onClick={onAddRepo}>Setup</Button>
          ) : (
            <Button>Add Repo</Button>
          )}
        </div>
      </Card>

      <Card className="rounded-xl border bg-card text-card-foreground shadow mt-10">
        <CardContent>
          <EmptyWorkspace />
        </CardContent>
      </Card>
    </div>
  );
}

export default WorkspaceBody;
